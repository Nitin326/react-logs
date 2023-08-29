import React, {useState, useEffect} from "react";
import CTable from "./common/CTable";
import axios from "axios";
import CPagination from "./common/CPagination";
import Search from "./common/Search";
import '../assets/css/Home.css';


const WaNotify = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLength] = useState(10);
  const [order, setOrder] = useState("desc");
  const [type, setType] = useState("");
  const [totalPage, setTotalPage] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://newdev.customer.onefin.app/api/support/get-whatsapp-communicaton`,
        {
          params: {
            type: type,
            sort: order,
            page: currentPage,
            page_length: pageLength,
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

  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const handleOrder = (odr) => {
    setOrder(odr);
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
      ): <div className="not-found">No Data found!</div>}
    </>
  );
};

export default WaNotify;
