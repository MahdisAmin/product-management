import React from "react";
import myPhoto from "../images/404.png";
import { useNavigate } from "react-router-dom";

import "../styles/404.css";

import { FaArrowLeft } from "react-icons/fa";

function PageNotFound() {
  const navigate =useNavigate()
  const backHandler = () => {
   navigate("/login")
  };
  return (
    <div className="container404">
      <img src={myPhoto} alt="Not Found" />
      <button className="button" onClick={backHandler}>
        back
        <span>
          <FaArrowLeft />
        </span>
      </button>
    </div>
  );
}

export default PageNotFound;
