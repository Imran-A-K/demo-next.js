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
          <div className="text-base font-medium text-gray-900">Order total</div>
          {/* <Currency value={totalPrice} /> */}
          2333
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
              <>
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
                  <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="absolute z-10 right-0 top-0">
                      {/* <IconButton onClick={onRemove} icon={<X size={15} />} /> */}
                      X
                    </div>
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div className="flex flex-col justify-between">
                        <p className=" text-lg font-semibold text-black">
                          Apple
                        </p>
                        <p>in laptops</p>
                        {/* <p>Price</p> */}
                        <div className="flex gap-2">
                          <p className="text-black font-semibold">Quantity: </p>
                          <div className="flex gap-2">
                            <button className="border text-sm p-1 rounded-full border-gray-500 cursor-pointer inline-flex items-center no-underline font-medium">
                              <HiMinus />
                            </button>
                            <div className="border font-semibold px-3 flex items-center">
                              2
                            </div>
                            <button className="border text-sm rounded-full p-1 border-gray-500  cursor-pointer inline-flex items-center no-underline font-medium">
                              <HiPlus />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-1 flex flex-col text-sm">
                        <p className="text-gray-500">Quantity</p>
                        <div className="flex gap-2">
                          <button className="border text-lg p-1 rounded-full border-gray-500 cursor-pointer inline-flex items-center no-underline font-medium">
                            <HiMinus />
                          </button>
                          <div className="border font-semibold px-3 flex items-center">
                            2
                          </div>
                          <button className="border text-lg rounded-full p-1 border-gray-500  cursor-pointer inline-flex items-center no-underline font-medium">
                            <HiPlus />
                          </button>
                        </div>
                        {/* <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                          size
                        </p> */}
                      </div>
                      {/* <Currency value={data.price} /> */}
                    </div>
                  </div>
                </li>
              </>
              <>
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
                {/* </>
              <> */}
                <li className="flex py-6 border-b">
                  <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                    <Image
                      fill
                      src={
                        "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                      }
                      alt="kjnf"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="absolute z-10 right-0 top-0">
                      {/* <IconButton onClick={onRemove} icon={<X size={15} />} /> */}
                      X
                    </div>
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div className="flex justify-between">
                        <p className=" text-lg font-semibold text-black">
                          name
                        </p>
                      </div>
                      <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">color</p>
                        <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                          size
                        </p>
                      </div>
                      {/* <Currency value={data.price} /> */}4477
                    </div>
                  </div>
                </li>
              </>
            </ul>
          </div>
          <Summary />
        </div>
      </div>
    </Container>
  );
}

export default cart;
