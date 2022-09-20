import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextFields from "../common/form/textField";
import CheckBoxField from "../common/form/checkBoxField";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "", stayOn: false });
    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const [errors, setError] = useState({});

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Email обязателен для заполнения"
            },
            isEmail: {
                message: "Email введён некоректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapital: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },
            min: {
                message: "Пароль должен состоять минмум из 8 символов",
                value: 8
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);

        setError(errors);
        return Object.keys(errors).length === 0;
    };
    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidate = validate();
        if (!isValidate) return;
        console.log(data);
    };

    useEffect(
        () => {
            validate();
        },
        [data]);

    return (
        <form onSubmit={handleSubmit}>
            <TextFields
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextFields
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            <CheckBoxField name="stayOn" value={data.stayOn} onChange={handleChange}>
                Stay signed in
            </CheckBoxField>
            <div className="col-12">
                <button className="btn btn-primary" disabled={!isValid} type="submit">Войти</button>
            </div>
        </form>

    );
};

export default LoginForm;
