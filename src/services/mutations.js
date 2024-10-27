import { useMutation, useQueryClient } from "@tanstack/react-query";

import api from "../api/api";

const useRegister = () => {
  const mutationFn = (data) => api.post("auth/register", data);

  return useMutation({ mutationFn });
};

const useLogin = () => {
  const mutationFn = (data) => api.post("auth/login", data);

  return useMutation({ mutationFn });
};

const addProductsMutation = () => {
  const mutationFn = (newProduct) => api.post("/products", newProduct);
  return useMutation({ mutationFn });
};

const getProducts = async () => {
  const response = await api.get("/products");
  return response.data;
};

const editProductMutation = () => {
  const mutationFn = (updateProduct) =>
    api.put(`products/${updateProduct.id}`, updateProduct);
  return useMutation({ mutationFn });
};

const deleteProductMutation = () => {
  const mutationFn = (productId) => api.delete(`/products/${productId}`);
  return useMutation({ mutationFn });
};

export {
  useRegister,
  useLogin,
  getProducts,
  addProductsMutation,
  deleteProductMutation,
  editProductMutation,
};
