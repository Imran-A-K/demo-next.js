"use client";
import Image from "next/image";
import Rating from "../Rating/page";
import { useGetCart } from "@/app/hooks/api/data";
import { FaCartPlus } from "react-icons/fa6";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi";
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
  className,
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
      className="cursor-pointer group transition"
      onClick={() => router.push(`/products/${id}?searchQuery=${category}`)}
    >
      <div className="card bg-white w-[200px] sm:w-[250px] m-2 rounded-lg shadow-md">
        <div className="top">
          <Image
            className={`w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] rounded-xl object-cover group-hover:scale-105 transition duration-300 p-2 ${className}`}
            src={img}
            alt={`${id}`}
            width={300}
            height={300}
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
            <div className="price font-extrabold">Price: ${price}</div>
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
                  Added to Cart
                </span>
              ) : (
                <span className="flex gap-2 items-center justify-center">
                  <FaCartPlus /> Add to Cart
                </span>
              )}
            </button>
          </div>
          {/* <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium">
              <div
                // className={`flex-1 h-full flex justify-center items-center cursor-pointer ${
                //   quantity > 1 ? "" : "text-gray-400"
                // }`}
                
              >
                <HiMinus
                // onClick={() => {
                //   handleCartUpdate(id, false);
                // }}
                />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {quantity}
                
              </div>
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <HiPlus
                onClick={() => {
                  handleCartUpdate(id, true);
                }}
                />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-around">
              $ {price}
            </div>
            <div className="text-xl cursor-pointer">
              <HiOutlineTrash
                onClick={() => {
                  deleteCartItem(id);
                  reloadCart();
                }}
                className="text-gray-500 hover:text-red-500 transition"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default Card;
