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
import addToCart from "../hooks/cartFunctions/cartFunctions";
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
        addToCart={addToCart}
      />
      <Carousel
        title={"SmartPhones"}
        data={allSmartPhones}
        category={"SmartPhones"}
        addToCart={addToCart}
      />
      <Carousel
        title={"Laptops"}
        data={allLaptops}
        category={"Laptops"}
        addToCart={addToCart}
      />
      <Carousel
        title={"Watches"}
        data={allWatches}
        category={"Watches"}
        addToCart={addToCart}
      />
      <Carousel
        title={"Sunglasses"}
        data={allSunglasses}
        category={"Sunglasses"}
        addToCart={addToCart}
      />
    </div>
  );
}

export default Page;
