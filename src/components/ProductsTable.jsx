import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getProducts } from "../services/mutations";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

import "./ProductTable.css";

function ProductsTable() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const editHandler = (id) => {
    console.log(id);
  };
  const deleteHandler = (id) => {
    console.log(id);
  };
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>error {error.message}</p>;
  const products = data?.data || [];
  return (
    <table>
      <thead>
        <tr>
          <th>نام کالا</th>
          <th>موجودی</th>
          <th>قیمت</th>
          <th>شناسه کالا</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.id.split("-")}</td>
            <td></td>
            <td>
              <button onClick={() => editHandler(product.id)}>
                <FaRegEdit style={{ color: "green" }} />
              </button>
              <button onClick={() => deleteHandler(product.id)}>
                <MdDelete style={{ color: "red" }} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;
