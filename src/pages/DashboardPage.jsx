import React, { useEffect, useState } from "react";

import "./Dashboard.css";

import SearchDashboard from "../components/SearchDashboard";
import { useNavigate } from "react-router-dom";
import { deleteCookie, getCookie } from "../utils/cookie";

function DashboardPage() {

    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const token = getCookie("token");
      if (!token) {
        navigate("/login");
      } else {
        setToken(token);
      }
    }, [navigate]);


  const logOutHandler = () => {
    deleteCookie("token"); 
    console.log("After delete:", getCookie("token")); 
    navigate("/login"); // هدایت به صفحه لاگین
  };

  return (
    <>
      <button onClick={logOutHandler}>log Out</button>
      <SearchDashboard />
      <div className="addContainer">
        <div>
          <p>مدیرت کالا</p>
        </div>
        <div>
          <button>افزودن محصول</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>نام کالا</th>
            <th>موجودی</th>
            <th>قیمت</th>
            <th>شناسه کالا</th>
            <th></th>
          </tr>
        </thead>
      </table>
    </>
  );
}

export default DashboardPage;
