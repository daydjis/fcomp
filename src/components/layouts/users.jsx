import React from "react";
import { useParams } from "react-router-dom";
import EditForm from "../ui/editForm";
import UserPage from "../page/userPage/userPage";
import UsersListPage from "../page/usersListPage/usersListPage";

const Users = () => {
    const { userId, edit } = useParams();

    return (
        <>
            {userId
                ? (
                    userId && edit
                        ? (
                            <EditForm userId={userId} />
                        )
                        : (
                            <UserPage userId={userId} />
                        )
                )
                : (
                    <UsersListPage />
                )}
        </>
    );
};

export default Users;
