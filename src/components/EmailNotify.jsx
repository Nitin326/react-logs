import React, {useEffect, useState} from "react";
import CTable from "./common/CTable";
import axios from "axios";
import CPagination from "./common/CPagination";
import Search from "./common/Search";
import '../assets/css/Home.css';

const EmailNotify = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLength] = useState(10);
  const [order, setOrder] = useState("desc");
  const [totalPage, setTotalPage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://newdev.customer.onefin.app/api/support/get-email-communicaton`,
        {
          params: {
            type: type,
            page: currentPage,
            page_length: pageLength,
            sort: order,
          },
        }
      )
      .then((response) => {
        setData(response.data.data);
        setTotalPage(Math.ceil(response.data.totalCount / pageLength));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [order, type, currentPage, pageLength]);

  const handleOrder = (odr) => {
    setOrder(odr);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const handleSearch = (data) => {
    console.log(data);
    setType(data);
  };

  return (
    <>
      {data.length > 0 ? (
        <div>
          <Search handleFunc={handleSearch} />
          <CTable data={data} func={handleOrder} />
          <CPagination handleFunc={handlePageClick} pages={totalPage} />
        </div>
      ) : (
        <div className="not-found">No Data found!</div>
      )}
    </>
  );
};

export default EmailNotify;
