import React from "react";
import { useParams } from "react-router-dom";
import UserProfile from "./userProfile";
import Users from "./users";

const usersLayout = () => {
    const { userId } = useParams();

    return <>{userId ? <UserProfile userId={userId} /> : <Users />}</>;
};

export default usersLayout;
