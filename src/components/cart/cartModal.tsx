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
      (event.target as HTMLElement).id === "goToOrder" ||
      (event.target as HTMLElement).id === "toOrder" ||
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
          <div className="flex flex-col justify-between overflow-y-auto top-0 w-full ssm:w-[400px] bg-white h-full  space-y-4 px-4   pb-2">
            <div>
              <div className="absolute bg-white t-0  w-full  ssm:w-[380px]">
                <div className="flex justify-between items-center pt-2 ">
                  <p className="text-center text-secondary-dark3 text-3xl font-bold">
                    YOUR CART
                  </p>
                  <button
                    className=" pt-1 pr-8 ssm:pr-3"
                    onClick={handleCartClose}
                  >
                    <div className="p-1  bg-secondary-dark3 w-8 rounded-lg mb-2">
                      <CloseIcon />
                    </div>
                  </button>
                </div>
                <hr className="mr-8 pt-2 ssm:mr-3" />
              </div>
              <div className="pb-20">
                <CartItem
                  cards={cart.cartItems}
                  quantity={cart.amount}
                ></CartItem>
              </div>
            </div>
            <div className="absolute bottom-0 bg-white w-full  ssm:w-[360px] pt-2 space-y-2 text-center">
              <div className="flex justify-between items-center w-full pr-6 ssm:pr-0">
                <p className="text-2xl font-bold ">Total</p>
                <p className="text-xl font-semibold">
                  ${cart.totalPrice.toFixed(2)} USD
                </p>
              </div>
              <Link className="" href="/payment">
                <button
                  id="goToOrder"
                  onClick={() => {
                    dispatch(addToOrder(cart));
                    handleCartClose;
                  }}
                  className="mb-2 w-full py-2 mr-32 ssm:mr-0 border-2 border-black bg-secondary-dark3 text-white text-xs"
                >
                  <button id="toOrder" onClick={handleCartClose}>
                    CHECKOUT
                  </button>
                </button>
              </Link>
            </div>
          </div>
        </button>
      )}
    </>
  );
}
