import React, { useState, useEffect } from "react";

import TextFields from "./textField";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    const [, setError] = useState();

    const validate = () => {
        const errors = {};
        for (const fieldName in data) {
            if (data[fieldName].trim() === "") {
                errors[fieldName] = `${fieldName} обязательно для заполнения`;
            }
        }
        setError(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValidate = validate();
        if (!isValidate) return;
        console.log(data);
    };
    useEffect(() => { validate(); }, [data]);
    return (
        <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
            <TextFields
                label="Email"
                name="email"
                value={data.email}
                onChange={handleChange}
            />
            <TextFields
                label="Password"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
            />
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    );
};

export default Login;
