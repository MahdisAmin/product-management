import { useMutation } from "@tanstack/react-query";

import api from "../api/api";

const useRegister = () => {
  const mutationFn = (data) => api.post("auth/register", data);

  return useMutation({ mutationFn });
};

const useLogin = () => {
  const mutationFn = (data) => api.post("auth/login", data);

  return useMutation({ mutationFn });
};

const getProducts = async () => {
  const response = await api.get("/products");
  return response.data
};
export { useRegister, useLogin  , getProducts};
