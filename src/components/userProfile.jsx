import React, { useState, useEffect } from "react";
import api from "../api";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";
import { useHistory } from "react-router-dom";

const UserProfile = ({ userId }) => {
    const [user, setUser] = useState();
    const histori = useHistory();

    const handleToUsersPage = () => {
        histori.push("/users");
    };

    useEffect(() => { api.users.getById(userId).then((data) => setUser(data)); }, []);
    if (user) {
        return (<div>
            <h1>{user.name}</h1>
            <h2>Профессия:{user.profession.name}</h2>
            <QualitiesList qualities={user.qualities} />
            <h6>completedMeetings:{user.completedMeetings}</h6>
            <h2>Rate:{user.rate}</h2>
            <button onClick={() => handleToUsersPage()}>Все пользователи</button>
        </div >);
    } return "Загрузка...";
};

UserProfile.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserProfile;
