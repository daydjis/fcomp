import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    return (
        <>
            <button {...rest}>
                <i
                    className={
                        status ? "bi bi-bookmark-fill" : "bi bi-bookmark"
                    }
                ></i>
            </button>
        </>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired
};
export default BookMark;
