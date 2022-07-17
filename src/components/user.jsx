import React from "react";
import Qualiti from "./qualitati";
import BookMark from "./bookmark";

const User = (props) => {

  return (
      <>
        <tr key={props._id}>
          <td>{props.name}</td>
          <td>
            {props.qualities.map((qual) => (
                <Qualiti key={qual._id} {...qual} />
            ))}
          </td>
          <td>{props.profession.name}</td>
          <td>{props.completedMeetings}</td>
          <td>{props.rate} /5</td>
          <td><BookMark
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


export default User;