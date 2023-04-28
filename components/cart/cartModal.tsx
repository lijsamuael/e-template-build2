"use client";

import { MouseEventHandler } from "react";
import Link from "next/link";

import CartItem from "./cartItem";
import ProductType from "@/interface/product";
import CloseIcon from "../icons/close";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { addToOrder } from "@/redux/orderSlice";

interface CartModalProps {
  cartState: boolean;
  closeCartAction: MouseEventHandler<HTMLButtonElement>;
}

export default function CartModal(props: CartModalProps) {
  function handleCartClose(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    if (
      (event.target as HTMLElement).id === "container" ||
      (event.target as HTMLElement).id === "closeButton"
    ) {
      props.closeCartAction(event);
    }
  }
  const { cartState } = props;

  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      {cartState && (
        <button
          id="container"
          onClick={handleCartClose}
          className="  fixed z-10 top-0 left-0 bg-gray-dark3 text-secondary-dark4  w-full h-full flex items-start justify-end gap-x-4 bg-opacity-40"
        >
          <div className="flex flex-col justify-between overflow-y-auto top-0 w-[400px] bg-white h-full pt-2 space-y-4 px-4   pb-2">
            <div>
              <div className="flex justify-between items-center py12">
                <p className="text-center text-3xl font-bold">YOUR CART</p>
                <button
                  id="colseButton"
                  className="self-end  w-12 "
                  onClick={handleCartClose}
                >
                  <div className="p-1 my-1 bg-secondary-dark4 w-8 rounded-lg ">
                    <CloseIcon />
                  </div>
                </button>
              </div>
              <hr className=" mt-2 " />
              <CartItem
                cards={cart.cartItems}
                quantity={cart.amount}
              ></CartItem>
            </div>
            <div className="space-y-2 text-center">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold ">Total</p>
                <p className="text-xl font-semibold">
                  ${cart.totalPrice.toFixed(2)} USD
                </p>
              </div>
              <Link href="payment">
                <button
                  onClick={() => dispatch(addToOrder(cart))}
                  className="w-full py-2  border-2 border-black bg-secondary-dark3 text-white text-xs"
                >
                  CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </button>
      )}
    </>
  );
}
