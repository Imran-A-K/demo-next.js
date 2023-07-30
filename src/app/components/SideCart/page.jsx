"use client";
import { useGetCart } from "@/app/hooks/api/data";
import React from "react";
import { HiOutlineArrowNarrowRight, HiOutlineTrash } from "react-icons/hi";
import SideBarCartItem from "../SideBarCartItem/page";
import Link from "next/link";
import { CartButton } from "../Cart/CartButton/page";
import { useRouter } from "next/navigation";

function SideCart({ sideBarIsOpen, setSideBarIsOpen }) {
  const router = useRouter();
  const handleCheckOut = () => {
    router.push("/cart");
    setSideBarIsOpen(false);
  };
  const [cart, cartLoading, reloadCart] = useGetCart();
  return (
    <>
      <div
        onClick={(event) => {
          setSideBarIsOpen(false);
          event.stopPropagation();
        }}
        className={`${
          sideBarIsOpen
            ? "fixed top-0 left-0 w-full h-screen bg-black/20 z-40"
            : "w-0 opacity-0"
        }`}
      />
      <section
        className={`${
          sideBarIsOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw]
  xl:max-w-[30vw] transition-all delay-75 duration-500 ease-linear z-50 px-4 lg:px-[35px] font-mono`}
      >
        <div className="flex items-center justify-between py-6 border-b">
          <div className="capitalize text-sm font-semibold ">My Cart (0)</div>
          <div
            onClick={() => setSideBarIsOpen(false)}
            className="cursor-pointer w-8 h-8 flex justify-center items-center"
          >
            <HiOutlineArrowNarrowRight className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-col gap-y-2 h-[420px] md:h-[950px] lg:h-[520px] overflow-y-auto overflow-x-hidden border-b scroll-smooth">
          {!cartLoading && cart?.length === 0 && <p>No items Added in Cart</p>}
          {cartLoading
            ? "Loading"
            : cart?.map((item) => (
                <SideBarCartItem key={item.id} item={item} />
              ))}
        </div>
        <div className="flex flex-col gap-y-3 py-4 mt-4">
          <div className="flex w-full justify-between items-center">
            <div className="capitalize font-semibold">
              <span className="mr-2">Total:</span>$ 1000
            </div>
            <div
              className="cursor-pointer p-2 bg-red-500 text-white gap-1
                flex justify-center items-center lg:text-base md:text-base rounded-lg"
            >
              <span>Clear Cart</span>
              <HiOutlineTrash />
            </div>
          </div>
          <Link href={"/cart"}>
            <CartButton
              handleCheckOut={handleCheckOut}
              disabled={cart.length === 0}
              className="w-full max-w-md"
            >
              Check Out
            </CartButton>
          </Link>
        </div>
      </section>
    </>
  );
}

export default SideCart;
