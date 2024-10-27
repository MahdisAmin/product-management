import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import {
  deleteProductMutation,
  editProductMutation,
  getProducts,
} from "../services/mutations";
import "../styles/ProductTable.css";
import { RotatingLines } from "react-loader-spinner";
import Table from "./Table";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

function ProductsTable() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const queryClient = useQueryClient();

  const deleteProduct = deleteProductMutation();
  const editProduct = editProductMutation();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openDeleteModal = (productId) => {
    setSelectedProduct(productId);
    setIsDeleteModalOpen(true);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product); 
    setIsEditModalOpen(true)
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProduct(null);
  };

  const editHandler = (updateProduct) => {
    editProduct.mutate(updateProduct, {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
        closeEditModal();
      },
      onError: (error) => {
        console.error("خطا در به‌روزرسانی محصول", error);
      },
    });
  };

  const deleteHandler = () => {
    if (selectedProduct) {
      deleteProduct.mutate(selectedProduct, {
        onSuccess: () => {
          queryClient.invalidateQueries("products");
          closeDeleteModal();
        },
      });
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
        openEditModal={openEditModal}
        openDeleteModal={openDeleteModal}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onDelete={deleteHandler}
      />

      <EditModal
        product={selectedProduct}
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        onSave={editHandler}
      />
    </>
  );
}

export default ProductsTable;
