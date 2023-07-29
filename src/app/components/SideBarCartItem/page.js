import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi";

function SideBarCartItem({ item }) {
  const {
    title,
    brand,
    quantity,
    price,
    images,
    category,
    discountPercentage,
    id,
  } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:pr-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[100px] flex items-center gap-x-4 ">
        <div>
          <Link href={`/products/${id}`}>
            <Image
              src={images[0] || images[1] || images[2]}
              className="max-w-[80px] max-h-[80px] object-scale-down"
              alt={`${title}`}
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              className="text-sm capitalize font-medium max-w-[240px] text-black hover:underline 
          "
              href={`/products/${id}`}
            >
              {title}
            </Link>
            <div className="text-xl cursor-pointer">
              <HiOutlineTrash className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium">
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <HiMinus />
              </div>
              <div className="h-full flex justify-center items-center px-2">
                {quantity}
              </div>
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <HiPlus />
              </div>
            </div>
            <div className="flex flex-1 items-center justify-around">
              $ {price}
            </div>
            <div className="flex flex-1 justify-end items-center text-black font-medium">
              $ {quantity * price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBarCartItem;
