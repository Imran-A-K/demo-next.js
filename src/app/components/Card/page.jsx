"use client";
import Image from "next/image";
import Rating from "../Rating/page";
import { useGetCart } from "@/app/hooks/api/data";
import { FaCartPlus } from "react-icons/fa6";
function Card({
  img,
  title,
  price,
  rating,
  router,
  id,
  category,
  product,
  addToCart,
}) {
  const [cart, cartLoading, reloadCart] = useGetCart();
  const alreadyAddedToCart = !!cart?.find((item) => item.id === id);
  const handleAddToCart = (event, product) => {
    event.stopPropagation();
    addToCart(product);
    reloadCart();
  };
  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/products/${id}?searchQuery=${category}`)}
    >
      <div className="card bg-white w-[200px] m-2 rounded-lg shadow-lg">
        <div className="top">
          <Image
            className="w-[200px] h-[200px] object-cover  p-2"
            src={img}
            alt={`${id}`}
            width={200}
            height={200}
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-base my-1 line-clamp-1">
            {title}
          </div>
          {/* <div className="category text-xs font-light my-1">
            5.4 cm (6.1-inch) display1
          </div> */}

          <div className="pricing flex items-center">
            {" "}
            <div className="price font-bold">Price: ${price}</div>
          </div>
          <Rating rating={rating} />
          <div className="flex flex-1 w-full items-center my-2">
            <button
              disabled={alreadyAddedToCart}
              onClick={(event) => {
                // event.stopPropagation();
                // addToCart(product);
                handleAddToCart(event, product);
              }}
              // className={`border-2 border-black px-3 py-1 text-base text-white hover:text-gray-900 hover:bg-white bg-gray-800 rounded-lg ${
              //   alreadyAddedToCart && "bg-white text-gray-900"
              // }`}
              className={`border-2 w-full border-black px-3 py-1 text-base rounded-lg ${
                alreadyAddedToCart
                  ? "bg-white text-gray-900"
                  : "text-white hover:text-gray-900 hover:bg-white bg-gray-800"
              }`}
            >
              {alreadyAddedToCart ? (
                <span className="flex gap-2 items-center justify-center">
                  <FaCartPlus /> Added to Cart
                </span>
              ) : (
                <span className="flex gap-2 items-center justify-center">
                  <FaCartPlus /> Add to Cart
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
