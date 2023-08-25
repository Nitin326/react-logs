import React, {useState, useEffect} from "react";
import LogTable from "./LogTable";
import "../assets/css/dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const [btnText, setBtnText] = useState("Show Exception Log");

  const [logData, setLogData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [pageLength, setPageLength] = useState(10);
  const [nextNumber, setnextNumber] = useState(pageLength);

  useEffect(() => {
    axios
      .get(`https://newdev.customer.onefin.app/api/support/get-logs`, {
        params: {
          page: currentPage,
          page_length: pageLength,
        },
      })
      .then((response) => {
        const res = response.data;
        console.log(res)
        setnextNumber(res.length);
        setLogData(res);
      })
      .catch((err) => {
        console.log("Error" + err);
      });
    // eslint-disable-next-line
  }, [currentPage, pageLength]);

  const handleShowTable = () => {
    const x = document.getElementById("dash_table");
    if (x.style.display === "none") {
      x.style.display = "block";
      setBtnText("Hide Exception Log");
    } else {
      x.style.display = "none";
      setBtnText("Show Exception Log");
    }
  };

  return (
    <>
      <button
        id="table_show_btn"
        className="custom-btn"
        onClick={handleShowTable}
      >
        {btnText}
      </button>
      <div id="dash_table" style={{display: "none"}}>
        <LogTable data={logData} />
        <div className="pagination_btns">
          {currentPage === 1 ? (
            <button className="custom-btn disabled-btn" disabled>
              Previous
            </button>
          ) : (
            <button
              className="custom-btn"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
          )}
          <div style={{backgroundColor:'#dfebdf', padding:'7px 15px', fontWeight:'bold'}}>{currentPage}</div>
          {nextNumber === 10 ? (
            <button
              className="custom-btn"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          ) : (
            <button className="custom-btn disabled-btn" disabled>
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
