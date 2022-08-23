
import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange }) => {
    return (
        <div className="col-md-6">
            <label className="form-label" htmlFor={name}>
                {label}
            </label>
            <input className="form-control"
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            />
        </div>);
};
TextField.defaultprops = {
    type: "text"
};

TextField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default TextField;
