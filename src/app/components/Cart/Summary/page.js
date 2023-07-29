"use client";
import { useGetCart } from "@/app/hooks/api/data";
import { CartButton } from "../CartButton/page";
import { calculateCart } from "@/app/hooks/cartFunctions/cartFunctions";
import Swal from "sweetalert2";

export const Summary = ({ cart, reloadCart }) => {
  //   console.log(cart);
  const { subtotal, totalItem, deliveryCharges, tax, grandTotal } =
    calculateCart(cart);
  //   console.log(subtotal);
  const handleCheckOut = () => {
    // console.log("bjhsd");
    Swal.fire({
      title: "Confirm Order?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm it!",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        await Swal.fire("Success!", "Your order has been placed.", "success");
        localStorage.setItem("cart", JSON.stringify([]));
        reloadCart();
      }
    });
  };
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-xl font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 flex flex-col flex-1 gap-8">
        <div className="border-t border-gray-200 flex flex-col">
          <div className="flex items-center justify-between pt-4">
            <div className="text-base font-medium text-gray-900">
              Price ({totalItem} {totalItem > 1 ? "items" : "item"})
            </div>
            {/* <Currency value={totalPrice} /> */}
            <span className="font-bold">${subtotal}</span>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="text-base font-medium text-gray-900">
              Delivery Charges
            </div>
            {/* <Currency value={totalPrice} /> */}
            <span className="font-bold">${deliveryCharges}</span>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="text-base font-medium text-gray-900">Tax(4%)</div>
            {/* <Currency value={totalPrice} /> */}
            <span className="font-bold">${tax}</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-lg font-semibold text-gray-900">Grand total</div>
          {/* <Currency value={totalPrice} /> */}
          <span className="font-bold">${grandTotal}</span>
        </div>
      </div>
      <div className="flex flex-1 w-full items-center justify-center">
        <CartButton
          handleCheckOut={handleCheckOut}
          disabled={cart.length === 0}
          className="w-full mt-6 max-w-md"
        >
          Confirm Order
        </CartButton>
      </div>
    </div>
  );
};
