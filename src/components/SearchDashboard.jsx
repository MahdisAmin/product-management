import React from "react";
import "../styles/Search.css";

import myImg from "../images/user.png";
import {  CiLogout, CiSearch } from "react-icons/ci";

function SearchDashboard({ logOutHandler }) {
  return (
    <div className="container">
      <div className="logout-btn">
        <button onClick={logOutHandler}>
          خروج
          <CiLogout style={{marginRight:"10px"}}/>
        </button>
      </div>
      <div className="inputHolder">
        <div className="search">
          <CiSearch style={{ fontSize: "30px", height: "40px" }} />
          <input type="text" placeholder="جستجو کالا" />
        </div>
        <div className="userHolder">
          <div>
            <img src={myImg} alt="" />
          </div>
          <div>
            <p>نام کاربری</p>
            <p>مدیر</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchDashboard;
