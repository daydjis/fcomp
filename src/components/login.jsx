import React, { useState } from "react";
import TextFields from "./textFields";

const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
        console.log(data);
    };
    return (
        <form action="">
            <TextFields label="Email" name="email" value={data.email} onChange={handleChange} />
            <TextFields label="Password" type="password" name="password" value={data.password} onChange={handleChange} />
        </form>
    );
};

export default Login;
