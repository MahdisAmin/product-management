import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { deleteProductMutation, getProducts } from "../services/mutations";

import "../styles/ProductTable.css";

import { RotatingLines } from "react-loader-spinner";
import Table from "./Table";
import DeleteModal from "./DeleteModal";

function ProductsTable() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const deleteProduct = deleteProductMutation();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null); 

  const openDeleteModal = (productId) => {
    setSelectedProductId(productId); 
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProductId(null);
  };

  const editHandler = (id) => {};
  const deleteHandler = () => {
    if (selectedProductId) {
  
      deleteProduct.mutate(selectedProductId);
      closeDeleteModal();
    }
  };

  if (isLoading)
    return (
      <div className="rotat">
        <RotatingLines strokeColor="#55a3f0" />
      </div>
    );
  if (error) return <div className="rotat">error {error.message}</div>;

  const products = data?.data || [];

  return (
    <>
      <Table
        products={products}
        editHandler={editHandler}
        openDeleteModal={openDeleteModal}
      />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={deleteHandler}
      />
    </>
  );
}

export default ProductsTable;
