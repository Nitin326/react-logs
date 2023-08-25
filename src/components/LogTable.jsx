import React, {useState} from "react";
import sortUp from "../assets/Images/sortUp.svg";
import sortDown from "../assets/Images/sortDown.svg";
import {Image, Modal} from "react-bootstrap";
import view from "../assets/Images/eye.svg";

const LogTable = ({data}) => {

  const [ReqBody, setReqBody] = useState({});
  const [title, setTitle] = useState('');

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="dashboard_container">
        <table id="logs_table">
          <tr>
            <th>id</th>
            <th>Method</th>
            <th>End Point</th>
            <th>Reqest</th>
            <th>User Id</th>
            <th>Response</th>
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
              />
              <img
                className="sort_icon"
                alt="up_arrow"
                src={sortUp}
                height="15px"
                width="15px"
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
                        setReqBody(log.req_body);
                        setTitle('Request')
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
                        setReqBody(log.req_body);
                        setTitle('Response')
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
                        setReqBody(log.req_body);
                        setTitle('Options')
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

        {/* Modal */}
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{overflow: "auto"}}>
            <table className="modal_table">
              {Object.entries(ReqBody).map(([key, value]) => (
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
