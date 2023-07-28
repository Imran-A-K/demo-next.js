import { CartButton } from "../CartButton/page";

export const Summary = () => {
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-xl font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 flex flex-col flex-1 gap-8">
        <div className="border-t border-gray-200 flex flex-col">
          <div className="flex items-center justify-between pt-4">
            <div className="text-base font-medium text-gray-900">
              Price (2 items)
            </div>
            {/* <Currency value={totalPrice} /> */}
            <span className="font-bold">$2333</span>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="text-base font-medium text-gray-900">
              Delivery Charges
            </div>
            {/* <Currency value={totalPrice} /> */}
            <span className="font-bold">$2333</span>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div className="text-base font-medium text-gray-900">Tax(4%)</div>
            {/* <Currency value={totalPrice} /> */}
            <span className="font-bold">$2333</span>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-lg font-semibold text-gray-900">Grand total</div>
          {/* <Currency value={totalPrice} /> */}
          <span className="font-bold">$2333</span>
        </div>
      </div>
      <div className="flex flex-1 w-full items-center justify-center">
        <CartButton
          // onClick={onCheckout}
          // disabled={items.length === 0}
          className="w-full mt-6 max-w-md"
        >
          Checkout
        </CartButton>
      </div>
    </div>
  );
};
