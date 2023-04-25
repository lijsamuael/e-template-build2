"use client";

import Link from "next/link";
import { MouseEventHandler } from "react";

interface CardModalProps {
  modalState: boolean;
  image: string;
  price: number;
  name: string;
  color: string;
  sizes?: string[];
  closeAction: MouseEventHandler<HTMLButtonElement>;
  openCartAction: MouseEventHandler<HTMLButtonElement>;
}

export default function CardModal(props: CardModalProps) {
  function handleClose(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    props.closeAction(event);
  }
  function handleCartOpen(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    props.openCartAction(event);
  }
  const { modalState, image, price, name, color, sizes } = props;
  return (
    <>
      {modalState && (
        <div className="y fixed z-10 top-0 left-0 bg-gray-600 h-screen w-full flex items-start justify-end gap-x-4 bg-opacity-40">
          <button className="top-0 w-4 ml-4" onClick={handleClose}>
            <img className="pt-4" src="./icons/cancel.png " alt="" />
          </button>
          <div className="overflow-y-auto top-0 w-[300px] bg-white h-screen pt-8 space-y-4 px-4 flex flex-col ">
            <p className="text-center">SELECT OPTIONS</p>
            <h1 className="text-center text-3xl font-bold">{name}</h1>
            <div className="flex flex-col bg-gray-100 mx-8 h-72 py-16 justify-center">
              <div className="self-center px-4">
                <img
                  src={`./images/${image}`}
                  alt=""
                  className="2xl:w-[500px]"
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="pt-4">${price}</p>
              <p>QUANTITY</p>
              <input
                placeholder="1 "
                type="number"
                className="border border-gray-400 w-12 px-2 py-1"
              />
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex gap-x-2 items-center">
                <p className="">COLOR</p>{" "}
                <span className="text-xs">SEA FOAM</span>
              </div>
              <div
                className={`w-6 h-6 border border-black rounded-full bg-${color}`}
              ></div>
              <p className="font-bold">SIZE</p>
              <div className="flex gap-x-4">
                {sizes &&
                  sizes.map((size,index) => (
                    <span key={index} className="flex items-center justify-center active:border-2 active:border-indigo-500  border border-gray-600 h-8 w-8 text-xs">
                      {size}
                    </span>
                  ))}
              </div>
            </div>
            <div className="space-y-4">
              <p className="">
                Pay in interest-free installments of $14.75 with
                <div className="flex items-center">
                  <img
                    src="./icons/shopepaybg.png"
                    alt=""
                    className="w-24 justify-start"
                  />
                  <Link href="" className="border-b border-black">
                    Learn more
                  </Link>
                </div>
              </p>
              <button
                className="w-full py-1 text-center border-2 border-black"
                onClick={handleCartOpen}
              >
                ADD TO CART
              </button>
              <button className="w-full py-1 text-center text-white bg-indigo-500 border border-indigo-500  flex items-center justify-center">
                Buy with{" "}
                <img src="./icons/shoppay.png" alt="" className="w-28" />
              </button>
            </div>
          </div>
        </div>
      )}
      {}
    </>
  );
}
