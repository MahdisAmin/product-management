import { useQuery } from "@tanstack/react-query"
import api from "../api/api"

const getAllProducts = () => {
    const queryFn = () => api.get("products");
    const queryKey = ['products']
    return useQuery({queryFn,queryKey})
}

export {getAllProducts}