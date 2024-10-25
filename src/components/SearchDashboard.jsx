import React from "react";
import "../styles/Search.css";

import myImg from "../images/user.png";
import { CiSearch } from "react-icons/ci";

function SearchDashboard() {
  return (
    <div className="container">
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
