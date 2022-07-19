import React, { useState } from "react";
import User from "./user";
import Pagination from "./pagination";
import {paginate} from "../utils/paginate";


const Users = ({ users, ...rest }) => {
  const count = users.length;
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    console.log("page: ", pageIndex);
    setCurrentPage(pageIndex);
  };

  const userCrop = paginate(users, currentPage, pageSize);
  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранноe</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
              <User key={user._id} {...user} {...rest} />
            ))}
          </tbody>
        </table>
      )}
      <Pagination
        itemsCount={count}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </>
  );
};


export default Users;
