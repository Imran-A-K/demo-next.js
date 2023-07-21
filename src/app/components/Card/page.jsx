"use client";
import Image from "next/image";
import Rating from "../Rating/page";

function Card({ img, title, price, rating }) {
  return (
    <div>
      <div className="card bg-white w-[200px] m-2 rounded-lg shadow-lg">
        <div className="top">
          <Image
            className="w-[200px] h-[200px] object-cover  p-2"
            src={img}
            alt="phones"
            width={200}
            height={200}
          />
        </div>
        <div className="bottom flex flex-col justify-center items-start p-3 bg-">
          <div className="title font-semibold text-xs my-1">{title}</div>
          {/* <div className="category text-xs font-light my-1">
            5.4 cm (6.1-inch) display1
          </div> */}

          <div className="pricing flex items-center">
            {" "}
            <div className="price ">price: ${price}</div>
          </div>
          <Rating rating={rating} />
          <div className="flex items-center my-2">
            <button className="border px-3 py-1 text-sm text-white bg-gray-800 rounded-lg ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
