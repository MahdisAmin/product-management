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
  const queryClient = useQueryClient();
  const mutationFn = (newProduct) => api.post("/products", newProduct);
  return useMutation(
    { mutationFn },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("products");
      },
    }
  );
};

const getProducts = async () => {
  const response = await api.get("/products");
  return response.data
};


export { useRegister, useLogin  , getProducts , addProductsMutation};
