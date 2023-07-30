import {
  deleteCartItem,
  updateCartItemQuantity,
} from "@/app/hooks/cartFunctions/cartFunctions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi";

function SideBarCartItem({ item, setSideBarIsOpen, router, reloadCart }) {
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
  const handleCartUpdate = (itemId, increment) => {
    updateCartItemQuantity(itemId, increment);
    reloadCart();
  };
  const handleClick = async (id) => {
    await router.push(`/products/${id}`);
    setSideBarIsOpen(false);
  };
  return (
    <div className="flex gap-x-4 py-2 lg:pr-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[100px] flex items-center gap-x-4 ">
        <div>
          <div
            // href={`/products/${id}`}
            onClick={() => handleClick(id)}
          >
            <Image
              src={images[0] || images[1] || images[2]}
              className="max-w-[80px] max-h-[80px] object-scale-down cursor-pointer"
              alt={`${title}`}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <span
              className="text-sm capitalize font-medium max-w-[240px] text-black hover:underline cursor-pointer 
          "
              // href={`/products/${id}`}
              onClick={() => handleClick(id)}
            >
              {title}
            </span>
            <div className="text-xl cursor-pointer">
              <HiOutlineTrash
                onClick={() => {
                  deleteCartItem(id);
                  reloadCart();
                }}
                className="text-gray-500 hover:text-red-500 transition"
              />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-black font-medium">
              <div
                className={`flex-1 h-full flex justify-center items-center cursor-pointer ${
                  quantity > 1 ? "" : "text-gray-400"
                }`}
              >
                <HiMinus
                  onClick={() => {
                    handleCartUpdate(id, false);
                  }}
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
