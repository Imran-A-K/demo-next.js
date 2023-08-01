import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useGetAllProducts = () => {
  const { data: allProducts = [], isLoading: allProductsLoading } = useQuery({
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
  return [allProducts, allProductsLoading];
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
  const { data: allSmartPhones = [], isLoading: smartPhoneLoading } = useQuery({
    queryKey: ["smartphones"],
    queryFn: async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/category/smartphones`
      );
      return response.data.products;
    },
  });
  return [allSmartPhones, smartPhoneLoading];
};
export const useLaptops = () => {
  const { data: allLaptops = [], isLoading: laptopsLoading } = useQuery({
    queryKey: ["laptops"],
    queryFn: async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/category/laptops`
      );
      return response.data.products;
    },
  });
  return [allLaptops, laptopsLoading];
};
export const useWatches = () => {
  const { data: allWatches = [], isLoading: allWatchesLoading } = useQuery({
    queryKey: ["watches"],
    queryFn: async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/category/mens-watches`
      );
      return response.data.products;
    },
  });
  return [allWatches, allWatchesLoading];
};
export const useSunglasses = () => {
  const { data: allSunglasses = [], isLoading: sunglassesLoading } = useQuery({
    queryKey: ["sunglasses"],
    queryFn: async () => {
      const response = await axios.get(
        `https://dummyjson.com/products/category/sunglasses`
      );
      return response.data.products;
    },
  });
  return [allSunglasses, sunglassesLoading];
};

export const useFullProducts = () => {
  const { data: fullProducts = [], isLoading: fullProductsLoading } = useQuery({
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
  return [fullProducts, fullProductsLoading];
};

export const useGetProduct = (id) => {
  const {
    data: product = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [`productId: ${id}`],
    queryFn: async () => {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      return response.data;
    },
  });
  return [product, refetch, isLoading];
};

export const useGetCategoryWiseProduct = (id, category) => {
  const { data: productsOfCategory = {}, isLoading: categoryLoading } =
    useQuery({
      queryKey: ["categoryOfProductWithOutProduct"],
      queryFn: async () => {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );
        // return response.data;
        const relatedProducts = response.data.products.filter(
          (product) => product.id != id
        );
        return relatedProducts;
      },
    });
  return [productsOfCategory, categoryLoading];
};

export const useGetCart = () => {
  const {
    data: cart = [],
    refetch: reloadCart,
    isLoading: cartLoading,
  } = useQuery({
    queryKey: ["cartData"],
    queryFn: async () => {
      const cart = localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : null;
      return cart;
    },
  });
  return [cart, cartLoading, reloadCart];
};
