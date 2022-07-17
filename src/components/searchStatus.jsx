import React from "react";

const SearchStatus = ({ length }) => {


    const formatUsers = () => {
        if (length === 0) {
            return "C вами сегодня никто не тусанет";
        } else
            return length < 5 && length !== 0
                ? length + " человека тусанёт с вами сегодня"
                : length + " человек тусанут с тобой сегодня";
    };
    const addBage = () => {
        if (length === 0) {
            return "badge bg-danger";
        }
    };
    return (
        <h2>
            <span className={`${addBage()}`}>{formatUsers()}</span>
        </h2>
    )
};

export default SearchStatus