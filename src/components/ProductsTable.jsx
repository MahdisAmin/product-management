import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { deleteProductMutation, getProducts } from "../services/mutations";

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

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openDeleteModal = (productId) => {
    setSelectedProductId(productId);
    setIsDeleteModalOpen(true);
  };

  const openEditModal = (productId) => {
    setSelectedProductId(productId);
    setIsEditModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedProductId(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedProductId(null);
  };

  const editHandler = (id) => {};
  const deleteHandler = () => {
    if (selectedProductId) {
      deleteProduct.mutate(selectedProductId, {
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
      <EditModal isOpen={isEditModalOpen} onClose={closeEditModal} />
    </>
  );
}

export default ProductsTable;
