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
import Loader from "../components/Loader/page";
function Page() {
  const pathName = usePathname();
  const [allProducts, allProductsLoading] = useGetAllProducts();
  const products = [...allProducts];
  // console.log(products);
  const popularProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10);
  // console.log(popularProducts);
  const [allSmartPhones, smartPhoneLoading] = useSmartPhones();
  const [allLaptops, laptopsLoading] = useLaptops();
  const [allWatches, allWatchesLoading] = useWatches();
  const [allSunglasses, sunglassesLoading] = useSunglasses();

  return (
    <div>
      <Hero />
      <>
        {allProductsLoading ? (
          <Loader />
        ) : (
          <Carousel
            title={"Most Popular"}
            data={popularProducts}
            category={"MostPopular"}
            addToCart={addToCart}
            className={"object-fill"}
          />
        )}
      </>
      <>
        {smartPhoneLoading ? (
          <Loader />
        ) : (
          <Carousel
            title={"SmartPhones"}
            data={allSmartPhones}
            category={"SmartPhones"}
            addToCart={addToCart}
            className={"object-fill"}
          />
        )}
      </>
      <>
        {laptopsLoading ? (
          <Loader />
        ) : (
          <Carousel
            title={"Laptops"}
            data={allLaptops}
            category={"Laptops"}
            addToCart={addToCart}
            className={"object-fill"}
          />
        )}
      </>
      <>
        {allWatchesLoading ? (
          <Loader />
        ) : (
          <Carousel
            title={"Watches"}
            data={allWatches}
            category={"Watches"}
            addToCart={addToCart}
            className={"object-scale-down"}
          />
        )}
      </>
      <>
        {sunglassesLoading ? (
          <Loader />
        ) : (
          <Carousel
            title={"Sunglasses"}
            data={allSunglasses}
            category={"Sunglasses"}
            addToCart={addToCart}
            className={"object-fill"}
          />
        )}
      </>
    </div>
  );
}

export default Page;
