import React, { useEffect, useState, useCallback } from "react";
import "../styles/Dashboard.css";
import SearchDashboard from "../components/SearchDashboard";
import { useNavigate } from "react-router-dom";
import { deleteCookie, getCookie } from "../utils/cookie";
import ProductsTable from "../components/ProductsTable";
import AddModal from "../components/AddModal";
import { CiLogout } from "react-icons/ci";
import { AiOutlineProduct } from "react-icons/ai";
import { getProducts } from "../services/mutations";
import { useQuery } from "@tanstack/react-query";

function DashboardPage() {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = data?.data || [];


  const handleFilter = useCallback((filtered) => {
    setFilteredProducts(filtered);
  }, []);

  const openModel = () => {
    setIsModalOpen(true);
  };

  const closeModale = () => {
    setIsModalOpen(false);
  };

  const logOutHandler = () => {
    deleteCookie("token");
    console.log("After delete:", getCookie("token"));
    navigate("/login");
  };

  const addProductsHandler = (newProducts) => {
    console.log(newProducts);
  };

  useEffect(() => {
    setFilteredProducts(products); // مقداردهی اولیه محصولات
  }, [products]);

  return (
    <>
      <SearchDashboard
        logOutHandler={logOutHandler}
        products={products}
        onFilter={handleFilter}
      />

      <div className="addContainer">
        <div>
          <p>
            <AiOutlineProduct
              style={{ marginLeft: "10px", marginTop: "1px" }}
            />
            مدیرت کالا
          </p>
        </div>
        <div>
          <button onClick={openModel}>افزودن محصول</button>
        </div>
      </div>
      <div className="table-container">
        <ProductsTable products={filteredProducts} />
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
