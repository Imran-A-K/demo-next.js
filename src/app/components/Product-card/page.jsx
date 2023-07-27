import Image from "next/image";
import React from "react";
import Rating from "../Rating/page";

function ProductCard({
  img,
  title,
  price,
  rating,
  id,
  router,
  category,
  product,
  addToCart,
}) {
  return (
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/products/${id}?searchQuery=${category}`)}
    >
      <div className="card bg-white w-64 m-2 rounded-lg shadow-lg">
        <div className="top">
          <Image
            className="w-64 h-[200px] object-cover  p-2"
            src={img}
            alt="phones"
            width={200}
            height={200}
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3">
          <div className="title font-semibold text-xs my-1">{title}</div>
          {/* <div className="category text-xs font-light my-1">
            5.4 cm (6.1-inch) display1
          </div> */}

          <div className="pricing flex items-center">
            {" "}
            <div className="price ">price: {price}</div>
          </div>
          <Rating rating={rating} />
          <div className="flex items-center my-2">
            <button
              onClick={() => addToCart(product)}
              className="border px-3 py-1 text-sm text-white bg-gray-800 rounded-lg "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

{
  /* <div className="bg-white p-2 rounded-lg shadow-lg">
      <div className="flex flex-col justify-center items-center max-w-sm mx-auto py-8">
        <div
          className={`bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80)]`}
        ></div>
        <div className="w-56 md:w-64 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide text-gray-800">
            Nike Revolt
          </div>
          <div className="flex items-center justify-between py-2 px-3 bg-gray-400">
            <h1 className="text-gray-800 font-bold ">$129</h1>
            <button className=" bg-gray-800 text-xs text-white px-2 py-1 font-semibold rounded uppercase hover:bg-gray-700">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div> */
}
