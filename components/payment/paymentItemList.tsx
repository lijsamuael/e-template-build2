"use client";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import AddedItems from "./addedItems";
import ProductType from "@/interface/product";

export default function PaymentItemList() {
  const cart = useSelector((state: RootState) => state.cart);
  const products = useSelector((state: RootState) => state.products);

  const selectedItems: ProductType[] = [];

  const shirts = products.filter((item) => item.type === "shirt");
  const numShirts = shirts.length;

  while (selectedItems.length < 3) {
    const index = Math.floor(Math.random() * numShirts);
    const selectedItem = shirts[index];
    if (!selectedItems.some((item) => item.id === selectedItem.id)) {
      selectedItems.push(selectedItem);
    }
  }

  return (
    <div className="flex flex-col  p-4 space-y-2 max-w-[540px] ">
      {cart.cartItems.map((item, index) => (
        <AddedItems key={index} cartItem={item} isNew={false} />
      ))}
      <h4 className="text-center pt-4 lg:pt-2">ADD THIS NEW ARRIVALS!</h4>

      {selectedItems.map((item, index) =>
        item.type === "shirt" ? (
          <AddedItems key={index} cartItem={item} isNew={true} />
        ) : null
      )}
      {/* <NewArivals /> */}
      <div className="flex gap-x-4 gap-y-4 py-8 px-2 justify-between border-b">
        <input
          className="  px-4 py-3 rounded-md grow"
          type="text"
          placeholder="Gift card or discount code"
        />
        <button className=" order rounded-md py-3 px-8 bg-gray-light3 text-white">
          Apply
        </button>
      </div>
      <div className="flex flex-col  py-4 px-2 gap-y-2 border-b">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>${cart.totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex justify-between gap-x-2 items-center">
            <p className="text-sm">Shipping</p>
            <img src="/icons/question.png" alt="" className="w-4" />
          </div>
          <p className="text-xs">Calculated at next step</p>
        </div>
      </div>
      <div className="flex justify-between py-4 px-2">
        <p>Total</p>
        <div className="flex gap-x-2 items-center">
          <p className="text-xs">USD</p>
          <span className="font-semibold">${cart.totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
