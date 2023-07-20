"use client";
import { usePathname } from "next/navigation";
import Hero from "../components/Hero/page";
import useGetAllProducts from "../hooks/useGetAllProducts";
import Carousel from "../components/Carousel/page";

function Page() {
  const pathName = usePathname();
  const [allProducts, refetch] = useGetAllProducts();
  // console.log(allProducts);
  return (
    <div>
      <Hero />
      <Carousel />
    </div>
  );
}

export default Page;
