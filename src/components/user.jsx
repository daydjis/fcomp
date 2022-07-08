import React, {useState} from "react";
import api from "../api";


const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    return <table className="table">
        <thead>
        <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Проффесия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
        </tr>
        </thead>
        <tbody>
        { users.map((user)=>
            <tr key={user._id}>
                <td key={user._id} >{user.name}</td>
                <td>{user.qualities.map((element) => {
                    return <td key={element._id} className={element.color}>{element.name}</td>
                })
                }</td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate}/5</td>
                <button type="button" className="btn btn-primary">
                    Delete
                </button>
            </tr>)
        }
        </tbody>
    </table>
}


export default Users