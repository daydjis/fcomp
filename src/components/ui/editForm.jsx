import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { validator } from "../../utils/validator";
import PropTypes from "prop-types";
import api from "../../api";
import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import RadioField from "../common/form/radioField";
import MultiSelectField from "../common/form/multiSelectField";

const EditForm = ({ userId }) => {
    const [data, setData] = useState();
    const [qualities, setQualities] = useState([]);
    const [professions, setProfession] = useState([]);
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const getProfessionById = (id) => {
        for (const prof of professions) {
            if (prof.value === id) {
                return { _id: prof.value, name: prof.label };
            }
        }
    };
    const getQualities = (elements) => {
        const qualitiesArray = [];
        for (const elem of elements) {
            console.log(elements);
            for (const quality in qualities) {
                if (elem.value === qualities[quality].value) {
                    qualitiesArray.push({
                        _id: qualities[quality].value,
                        name: qualities[quality].label,
                        color: qualities[quality].color
                    });
                }
            }
        }
        return qualitiesArray;
    };

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id
            }));
            setProfession(professionsList);
        });
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                value: data[optionName]._id,
                label: data[optionName].name,
                color: data[optionName].color
            }));
            setQualities(qualitiesList);
        });
    }, []);
    useEffect(() => {
        api.users.getById(userId).then((data) => setData(data));
    }, []);
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        name: {
            isRequired: {
                message: "name is required"
            }
        },
        email: {
            isRequired: {
                message: "email is required"
            },
            isEmail: {
                message: "invalid email"
            }
        },
        password: {
            isRequired: {
                message: "password is required"
            },
            isCapitalSymbol: {
                message: "password must contain uppercase characters"
            },
            isContainDigit: {
                message: "password must contain digits"
            },
            min: {
                message: "password must be min 8 characters long",
                value: 8
            }
        },
        profession: {
            isRequired: {
                message: "profession is required"
            }
        },
        licence: {
            isRequired: {
                message: "License agreement is required"
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { profession, qualities } = data;
        console.log({
            ...data,
            profession: getProfessionById(profession),
            qualities: getQualities(qualities)
        });
        api.users
            .update(data._id, {
                ...data,
                profession: getProfessionById(profession),
                qualities: getQualities(qualities)
            })
            .then((data) => {
                history.push(`/users/${data._id}`);
            });
    };

    if (data) {
        const arr = data.qualities.map((qual) => {
            return { label: qual.name, value: qual._id, color: qual.color };
        });
        console.log(data);
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <h3 className="mb-4">Edit</h3>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Name"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <SelectField
                                value={data.profession._id}
                                onChange={handleChange}
                                name="profession"
                                dafaultOption="Choose..."
                                options={professions}
                                label="Profession"
                                error={errors.profession}
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Sex"
                            />
                            <MultiSelectField
                                options={qualities}
                                onChange={handleChange}
                                defaultValue={arr}
                                name="qualities"
                                label="Qualities"
                            />
                            <button
                                type="submit"
                                className="btn btn-primary w-100 mx-auto"
                                disabled={!isValid}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};
EditForm.propTypes = {
    userId: PropTypes.string.isRequired
};
export default EditForm;
