import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";


const App = () => {

    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };

    const handleToggleBookMark = (id) => {
        const userIndex = users.findIndex((user) => user._id === id);
        const newUsers = [...users];
        newUsers[userIndex].bookmark ? newUsers[userIndex].bookmark = false : newUsers[userIndex].bookmark = true
        setUsers(newUsers);
    }


    return (
        <>
            <SearchStatus length={users.length} />
            <Users users={users} onDelete={handleDelete} onToggleBookMark={handleToggleBookMark} />
        </>
    );
}

export default App;