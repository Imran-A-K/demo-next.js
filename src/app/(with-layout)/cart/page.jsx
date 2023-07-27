import Container from "@/app/components/Container/page";
import Image from "next/image";
import React from "react";
import { HiMinus, HiOutlineTrash, HiPlus } from "react-icons/hi";
const Button = ({
  className,
  children,
  disabled,
  type = "button",
  ...props
}) => {
  return (
    <button
      className={`
        w-auto 
        rounded-full 
        bg-black
        border
        border-transparent
        px-5 
        py-3 
        disabled:cursor-not-allowed 
        disabled:opacity-50
        text-white
        font-semibold
        hover:opacity-75
        transition
        ${disabled && "opacity-75 cursor-not-allowed"}
        ${className}
      `}
    >
      {children}
    </button>
  );
};
const Summary = () => {
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-semibold text-gray-900">
            Grand total
          </div>
          {/* <Currency value={totalPrice} /> */}
          <span className="font-bold">$2333</span>
        </div>
      </div>
      <div className="flex flex-1 w-full items-center justify-center">
        <Button
          // onClick={onCheckout}
          // disabled={items.length === 0}
          className="w-full mt-6 max-w-md"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};
function cart() {
  return (
    <Container>
      <div className="px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {/* {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>} */}
            <ul>
              {/* {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))} */}
              {/* <CartItem key={item.id} data={item} /> */}

              <li className="flex py-6 border-b">
                <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-28 sm:w-28">
                  <Image
                    fill
                    src={
                      "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                    }
                    alt="kjnf"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 justify-start pl-6">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-lg">Apple</p>
                    <p className="text-gray-500">— in phones</p>
                    <div className="flex gap-2">
                      <span className="font-medium">Qty: </span>
                      <div
                        className="flex flex-1 max-w-[100px] items-center
                      h-full border text-black font-medium
                      "
                      >
                        <div
                          className="flex flex-1 justify-center
                        items-center cursor-pointer
                        "
                        >
                          <HiMinus />
                        </div>
                        <div className="h-full flex justify-center items-center px-2">
                          <span>2</span>
                        </div>
                        <div className="flex flex-1 h-full justify-center items-center cursor-pointer">
                          <HiPlus />
                        </div>
                      </div>
                    </div>
                    <p className="font-bold text-lg">Price: $40</p>
                  </div>
                </div>
                <div className="flex relative flex-col justify-end">
                  <span className="absolute text-lg top-0 right-0 hover:text-red-600">
                    <HiOutlineTrash />
                  </span>
                  <p className="text-gray-900 text-lg font-semibold">
                    Subtotal : $11
                  </p>
                </div>
              </li>
              <li className="flex py-6 border-b">
                <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-28 sm:w-28">
                  <Image
                    fill
                    src={
                      "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                    }
                    alt="kjnf"
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 justify-start pl-6 max-[320px]:pl-4">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-lg max-[320px]:text-base">
                      Apple
                    </p>
                    <p className="text-gray-500 max-[320px]:text-sm">
                      — in phones
                    </p>
                    <div className="flex gap-2">
                      <span className="font-medium max-[320px]:text-sm">
                        Qty:{" "}
                      </span>
                      <div
                        className="flex flex-1 max-w-[100px] items-center
                      h-full border text-black font-medium
                      "
                      >
                        <div
                          className="flex flex-1 justify-center
                        items-center cursor-pointer max-[320px]:text-sm
                        "
                        >
                          <HiMinus />
                        </div>
                        <div className="h-full flex justify-center items-center px-2 max-[320px]:px-1 max-[320px]:text-sm">
                          <span>2</span>
                        </div>
                        <div className="flex flex-1 h-full justify-center items-center cursor-pointer max-[320px]:text-sm">
                          <HiPlus />
                        </div>
                      </div>
                    </div>
                    <p className="font-bold text-lg max-[320px]:text-[13px]">
                      Price: $4000
                    </p>
                  </div>
                </div>
                <div className="flex relative flex-col justify-end">
                  <span className="absolute text-lg top-0 right-0 hover:text-red-600">
                    <HiOutlineTrash />
                  </span>
                  <p className="text-gray-900 text-lg font-semibold max-[320px]:text-xs max-[320px]:pb-1.5 max-[330px]:hidden">
                    total : $1100
                  </p>
                  <p className="text-gray-900 text-lg font-semibold max-[320px]:text-xs max-[320px]:pb-1.5 min-[331px]:hidden">
                    total : $1100
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </Container>
  );
}

export default cart;
