import React, {useEffect, useState} from "react";
import sortUp from "../assets/Images/sortUp.svg";
import sortDown from "../assets/Images/sortDown.svg";
import {Image, Modal} from "react-bootstrap";
import view from "../assets/Images/eye.svg";
import axios from "axios";
import "../assets/css/logTable.css";
import CPagination from "./common/CPagination";

const LogTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLength] = useState(10);
  const [order, setOrder] = useState("desc");
  const [myObj, setMyObj] = useState({});
  const [title, setTitle] = useState("");
  const [totalPage, setTotalPage] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get(`https://newdev.customer.onefin.app/api/support/get-logs`, {
        params: {
          page: currentPage,
          page_length: pageLength,
          sort: order,
        },
      })
      .then((response) => {
        setData(response.data.logs);
        setTotalPage(Math.ceil(response.data.totalCount/pageLength));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [order, currentPage, pageLength]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  return (
    <>
      <div className="log-table-container">
        <table id="logs_table">
          <tr>
            <th>id</th>
            <th>Method</th>
            <th>End Point</th>
            <th>Reqest Body</th>
            <th>User Id</th>
            <th>Response Body</th>
            <th>options</th>
            <th>status</th>
            <th>message</th>
            <th>log.description.name</th>
            <th>
              created_at
              <img
                className="sort_icon m-2"
                alt="down_arrow"
                src={sortDown}
                height="15px"
                width="15px"
                onClick={() => setOrder("asc")}
              />
              <img
                className="sort_icon"
                alt="up_arrow"
                src={sortUp}
                height="15px"
                width="15px"
                onClick={() => setOrder("desc")}
              />
            </th>
          </tr>
          {data.map((log, index) => {
            return (
              <tr key={index}>
                <td>{log.id || "-"}</td>
                <td>{log.method || "-"}</td>
                <td>{log.end_point || "-"}</td>
                <td>
                  {typeof log.req_body === "object" ? (
                    <Image
                      src={view}
                      width="20px"
                      height="20px"
                      style={{cursor: "pointer"}}
                      onClick={() => {
                        handleShow();
                        setTitle("Request Body");
                        setMyObj(log.req_body);
                      }}
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td>{log.customer_id || "-"}</td>
                <td>
                  {typeof log.description.response == "object" &&
                  Object.keys(log.description.response).length > 0 ? (
                    <Image
                      src={view}
                      width="20px"
                      height="20px"
                      style={{cursor: "pointer"}}
                      onClick={() => {
                        handleShow();
                        setTitle("Response Body");
                        setMyObj(log.req_body);
                      }}
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td>
                  {typeof log.description.options === "object" &&
                  Object.keys(log.description.options).length > 0 ? (
                    <Image
                      src={view}
                      alt="eye-icon"
                      width="20px"
                      height="20px"
                      style={{cursor: "pointer"}}
                      onClick={() => {
                        handleShow();
                        setTitle("Options");
                        setMyObj(log.req_body);
                      }}
                    />
                  ) : (
                    "-"
                  )}
                </td>
                <td>{log.description.status || "-"}</td>
                <td>{log.description.message || "-"}</td>
                <td>{log.description.name || "-"}</td>
                <td>{log.created_at || "-"}</td>
              </tr>
            );
          })}
        </table>
        {/* Pagination */}
        <CPagination handleFunc={handlePageClick} pages = {totalPage} />

        {/* Modal */}
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title} Body</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{overflow: "auto"}}>
            <table className="modal_table">
              {Object.entries(myObj).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </table>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default LogTable;