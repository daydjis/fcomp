import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const formatUsers = () => {
    return users.length < 5 && users.length !== 0 ? "человека" : "человек";
  };

  const handleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter((element) => element._id !== id));
  };
  return (
    <>
      <h1>{`C вами тусанёт сегодня ${users.length} ${formatUsers()}`}</h1>
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
