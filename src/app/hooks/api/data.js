import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useGetAllProducts = () => {
  const { data: allProducts = [] } = useQuery({
    queryKey: ["all-Products"],
    queryFn: async () => {
      const response = await axios.get(`https://dummyjson.com/products`);
      const categories = [
        "smartphones",
        "laptops",
        "mens-watches",
        "sunglasses",
      ];
      const techProducts = response.data.products.filter((product) =>
        categories.includes(product.category)
      );
      return techProducts;
    },
  });
  return [allProducts];
};

export const useGetAllCategories = () => {
  const { data: allCategories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/categories`
      );
      return response.data;
    },
  });
  return [allCategories];
};
export const useSmartPhones = () => {
  const { data: allSmartPhones = [] } = useQuery({
    queryKey: ["smartphones"],
    queryFn: async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/category/smartphones`
      );
      return response.data.products;
    },
  });
  return [allSmartPhones];
};
export const useLaptops = () => {
  const { data: allLaptops = [] } = useQuery({
    queryKey: ["laptops"],
    queryFn: async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/category/laptops`
      );
      return response.data.products;
    },
  });
  return [allLaptops];
};
export const useWatches = () => {
  const { data: allWatches = [] } = useQuery({
    queryKey: ["watches"],
    queryFn: async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/category/mens-watches`
      );
      return response.data.products;
    },
  });
  return [allWatches];
};
export const useSunglasses = () => {
  const { data: allSunglasses = [] } = useQuery({
    queryKey: ["sunglasses"],
    queryFn: async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/category/sunglasses`
      );
      return response.data.products;
    },
  });
  return [allSunglasses];
};

export const useFullProducts = () => {
  const { data: fullProducts = [] } = useQuery({
    queryKey: ["full-products"],
    queryFn: async () => {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=100`
      );
      // return response.data.products;
      const categories = [
        "smartphones",
        "laptops",
        "mens-watches",
        "sunglasses",
      ];
      const techProducts = response.data.products.filter((product) =>
        categories.includes(product.category)
      );
      return techProducts;
    },
  });
  return [fullProducts];
};
