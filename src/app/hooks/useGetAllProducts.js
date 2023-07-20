import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const useGetAllProducts = () => {
  const { refetch, data: allProducts = [] } = useQuery({
    queryKey: ["all-Products"],
    queryFn: async () => {
      const response = await axios.get(`https://dummyjson.com/products`);
      return response.data;
    },
  });
  return [allProducts, refetch];
};

export default useGetAllProducts;
