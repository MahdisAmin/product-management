import React, {useState, useCallback } from "react";
import "../styles/Dashboard.css";
import SearchDashboard from "../components/SearchDashboard";
import { useNavigate } from "react-router-dom";
import { deleteCookie, getCookie } from "../utils/cookie";
import ProductsTable from "../components/ProductsTable";
import AddModal from "../components/AddModal";
import { AiOutlineProduct } from "react-icons/ai";
import { useGetAllProducts } from "../services/querie";
import Pagination from "../components/pagination";


function DashboardPage() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const { data  } = useGetAllProducts(currentPage);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = data?.data || [];

 

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
  

  const totalPages = data?.data.totalPages;



  return (
    <>
      <SearchDashboard
        logOutHandler={logOutHandler}
        products={products.data}
        setFilteredProducts={setFilteredProducts}
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
        
          <ProductsTable
            products={filteredProducts}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        
      </div>
      <AddModal
        isOpen={isModalOpen}
        onClose={closeModale}
        onCreat={addProductsHandler}
      />
      <Pagination
        currentPage={currentPage}
        totalPage={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default DashboardPage;
