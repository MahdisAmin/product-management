import React from "react";
import myPhoto from "../images/404.png";
import { Link } from "react-router-dom";

import "./404.css";
import { MdArrowLeft } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
function PageNotFound() {
  return (
    <div className="container">
      <img src={myPhoto} alt="Not Found" />
      <button className="button">
        <div>
          <Link to="login">Back to login</Link>
          <FaArrowLeft />
        </div>
      </button>
    </div>
  );
}

export default PageNotFound;
