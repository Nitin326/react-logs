import React from "react";
import "../../assets/css/table.css";
import sortUp from "../../assets/Images/sortUp.svg";
import sortDown from "../../assets/Images/sortDown.svg";

const CTable = ({data,func}) => {
  return (
    <>
      <div id="custom_table-container">
        <table id="cus_table">
          <tr>
            <th>id</th>
            <th>user id</th>
            <th>type</th>
            <th>
              created_at
              <img
                className="sort_icon m-2"
                alt="down_arrow"
                src={sortDown}
                height="15px"
                width="15px"
                onClick={() => func("asc")}
              />
              <img
                className="sort_icon"
                alt="up_arrow"
                src={sortUp}
                height="15px"
                width="15px"
                onClick={() => func("desc")}
              />
            </th>
            <th>updated_at</th>
            <th>comm_request_id</th>
          </tr>
          {data.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.id || "-"}</td>
                <td>{user.customer_id || "-"}</td>
                <td>{user.type || "-"}</td>
                <td>{user.created_at || "-"}</td>
                <td>{user.updated_at || "-"}</td>
                <td>{user.comm_request_id || "-"}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default CTable;
