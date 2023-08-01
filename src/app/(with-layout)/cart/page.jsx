"use client";
import CartCard from "@/app/components/Cart/CartCard/page";
import { Summary } from "@/app/components/Cart/Summary/page";
import Container from "@/app/components/Container/page";
import Loader from "@/app/components/Loader/page";
import { useGetCart } from "@/app/hooks/api/data";
import React from "react";

function Cart() {
  const [cart, cartLoading, reloadCart] = useGetCart();

  return (
    <Container>
      {cartLoading ? (
        <div className="h-full w-full z-50 flex justify-center items-center pt-10">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <>
            <h1 className="text-3xl font-bold text-black">Order Summary</h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
              {cartLoading ? (
                <Loader />
              ) : (
                <div className="lg:col-span-7">
                  {/* {cart?.length === 0 && (
                <p className="text-neutral-500 text-lg">
                  No items added to cart.
                </p>
              )} */}
                  {cart ? (
                    cart?.length === 0 && (
                      <p className="text-neutral-500 text-lg">
                        No items added to cart.
                      </p>
                    )
                  ) : (
                    <p className="text-neutral-500 text-lg">
                      No items added to cart.
                    </p>
                  )}
                  <ul>
                    {/* {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))} */}
                    {/* <CartItem key={item.id} data={item} /> */}
                    {cart?.map((item) => (
                      <CartCard
                        key={item.id}
                        item={item}
                        reloadCart={reloadCart}
                      />
                    ))}
                    {/* <CartCard />
              <CartCard /> */}
                  </ul>
                </div>
              )}
              {!cartLoading && <Summary cart={cart} reloadCart={reloadCart} />}
            </div>
          </>
        </div>
      )}
    </Container>
  );
}

export default Cart;
