import React from "react";
import "../assets/css/Home.css";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-btns">
        <Link to="/logs">
          <button className="custom-btn">Show Log</button>
        </Link>
        <Link to="/email">
          <button className="custom-btn">Show Email</button>
        </Link>
        <Link to="/whatsapp">
          <button className="custom-btn">Show Whatsapp</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
