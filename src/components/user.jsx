import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());

  const formatUsers = () => {
    if (users.length === 0) {
      return "C вами сегодня никто не тусанет";
    } else
      return users.length < 5 && users.length !== 0
        ? users.length + " человека тусанёт с вами сегодня"
        : users.length + " человек тусанут с тобой сегодня";
  };

  const addBages = () => {
    if (users.length === 0) {
      return "badge bg-danger";
    }
  };

  const handleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter((element) => element._id !== id));
  };
  return (
    <>
      <span className={`${addBages()}`}>{formatUsers()}</span>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Професcия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((element) => {
                  return (
                    <td key={element._id}>
                      <span className={`badge bg-${element.color}`}>
                        {element.name}
                      </span>
                    </td>
                  );
                })}
              </td>
              <td key={user.profession._id}>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  {"delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
