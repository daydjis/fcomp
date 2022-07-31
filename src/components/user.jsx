import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = (props) => {
    return (
        <>
            <tr key={props._id}>
                <td>{props.name}</td>
                <td>
                    {props.qualities.map((qual) => (
                        <Qualitie key={qual._id} {...qual} />
                    ))}
                </td>
                <td>{props.profession.name}</td>
                <td>{props.completedMeetings}</td>
                <td>{props.rate} /5</td>
                <td>
                    <BookMark
                        status={props.bookmark}
                        onClick={() => props.onToggleBookMark(props._id)}
                    />
                </td>
                <td>
                    <button
                        onClick={() => props.onDelete(props._id)}
                        className="btn btn-danger"
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        </>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    qualities: PropTypes.array.isRequired,
    profession: PropTypes.object.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onToggleBookMark: PropTypes.func.isRequired
};

export default User;
