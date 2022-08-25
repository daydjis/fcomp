import React, { useState, useEffect } from "react";
import { validator } from "../../utils/validator";
import TextFields from "../textField";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const [errors, setError] = useState({});

    const validatorConfig = {
        email: { isRequired: { message: "обязательно для заполнения" } },
        password: { isRequired: { message: "обязательно для заполнения" } }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);

        setError(errors);
        return Object.keys(errors).length === 0;
    };

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
    console.log("errors", errors);

    return (
        <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
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
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    );
};

export default Login;
