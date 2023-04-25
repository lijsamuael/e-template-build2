"use client";

import { MouseEventHandler } from "react";
import Link from "next/link";

import data from "../../model/cart.json";
import CartItem from "./cardItem";

interface CartModalProps {
  cartState: boolean;
  image: string;
  price: number;
  name: string;
  color: string;
  sizes: string[];
  closeCartAction: MouseEventHandler<HTMLButtonElement>;
}

export default function CartModal(props: CartModalProps) {
  function handleCartClose(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    props.closeCartAction(event);
  }
  const { cartState, image, price, name, color, sizes } = props;
  let total = 0;
  data.cart.map((item) => (total += item.price));
  total += price;
  return (
    <>
      {cartState && (
        <div className="  fixed z-10 top-0 left-0 bg-gray-dark3 text-secondary-dark4  w-full h-full flex items-start justify-end gap-x-4 bg-opacity-40">
          <div className="overflow-y-auto top-0 w-[350px] bg-white h-full pt-8 space-y-4 px-4 flex flex-col  pb-8">
            <div className="flex justify-between">
              <p className="text-center text-3xl font-bold">YOUR CART</p>
              <button className="top-0 w-4 ml-4" onClick={handleCartClose}>
                <img className="pt-4" src="./icons/cancel.png " alt="" />
              </button>
            </div>
            <hr className="" />
            {data.cart.map((item, index) => (
              <CartItem
                key={index}
                title={item.name}
                image={item.image}
                color={item.color}
                price={item.price}
                size={item.size}
                quantity={item.quantity}
              ></CartItem>
            ))}
            <CartItem
              title={name}
              image={image}
              color={color}
              price={price}
              size={"XL"}
              quantity={1}
            ></CartItem>
            <div className="space-y-2 text-center">
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold ">Total</p>
                <p className="text-xl font-semibold">${total} USD</p>
              </div>
              <Link href="payment">
                <button className="w-full py-2  border-2 border-black bg-secondary-dark3 text-white text-xs">
                  CHECKOUT
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
