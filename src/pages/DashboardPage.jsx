import React, { useEffect, useState } from "react";

import "./Dashboard.css";

import SearchDashboard from "../components/SearchDashboard";
import { useNavigate } from "react-router-dom";
import { deleteCookie, getCookie } from "../utils/cookie";
import ProductsTable from "../components/ProductsTable";
import AddModal from "../components/AddModal";

function DashboardPage() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModel = () => {
    setIsModalOpen(true);
  };
  const closeModale = () => {
    setIsModalOpen(false);
  };

  const addProductsHandler = (newProducts) => {
    console.log(newProducts);
  };

  const logOutHandler = () => {
    deleteCookie("token");
    console.log("After delete:", getCookie("token"));
    navigate("/login");
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
          <button onClick={openModel}>افزودن محصول</button>
        </div>
      </div>
      <div className="table-container">
        <ProductsTable />
      </div>
      <AddModal
        isOpen={isModalOpen}
        onClose={closeModale}
        onCreat={addProductsHandler}
      />
    </>
  );
}

export default DashboardPage;
