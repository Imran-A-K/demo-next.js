"use client";
import { usePathname } from "next/navigation";
import Hero from "../components/Hero/page";
import Carousel from "../components/Carousel/page";
import {
  useGetAllProducts,
  useLaptops,
  useSmartPhones,
  useSunglasses,
  useWatches,
} from "../hooks/api/data";

function Page() {
  const pathName = usePathname();
  const [allProducts] = useGetAllProducts();
  const products = [...allProducts];
  // console.log(products);
  const popularProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);
  // console.log(popularProducts);
  const [allSmartPhones] = useSmartPhones();
  const [allLaptops] = useLaptops();
  const [allWatches] = useWatches();
  const [allSunglasses] = useSunglasses();

  return (
    <div>
      <Hero />
      <Carousel
        title={"Most Popular"}
        data={popularProducts}
        category={"MostPopular"}
      />
      <Carousel
        title={"SmartPhones"}
        data={allSmartPhones}
        category={"SmartPhones"}
      />
      <Carousel title={"Laptops"} data={allLaptops} category={"Laptops"} />
      <Carousel title={"Watches"} data={allWatches} category={"Watches"} />
      <Carousel
        title={"Sunglasses"}
        data={allSunglasses}
        category={"Sunglasses"}
      />
    </div>
  );
}

export default Page;
