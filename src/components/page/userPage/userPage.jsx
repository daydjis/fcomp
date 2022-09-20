import React, { useState, useEffect } from "react";
import api from "../../../api";
import PropTypes from "prop-types";
import QualitiesList from "../../ui/qualities/qualitiesList";
import { useHistory, Link } from "react-router-dom";

const UserPage = ({ userId }) => {
    const [user, setUser] = useState();
    const histori = useHistory();

    const handleClick = () => {
        histori.push("/users");
    };

    useEffect(() => { api.users.getById(userId).then((data) => setUser(data)); },
        []);
    if (user) {
        return (
            <div className="d-flex justify-content-center">
                <div>
                    <h1>{user.name}</h1>
                    <h2>Профессия:{user.profession.name}</h2>
                    <QualitiesList qualities={user.qualities} />
                    <h6>completedMeetings:{user.completedMeetings}</h6>
                    <h2>Rate:{user.rate}</h2>
                    <button onClick={handleClick}>Все пользователи</button>
                    <button>
                        <Link to={`/users/${user._id}/edit`}>edit</Link>
                    </button>
                </div>
            </div>);
    } return <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div>;
};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
