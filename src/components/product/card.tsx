"use client";
import { useEffect, useState } from "react";
import CartModal from "../cart/cartModal";
import CardModal from "./cardModal";
import ProductType from "@/interface/product";

export default function Card(product: ProductType) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setCarIsOpen] = useState(false);
  function handleOpen() {
    setIsOpen(true);
  }
  function handleClose() {
    setIsOpen(false);
  }
  function handleCartOpen() {
    setIsOpen(false);
    setCarIsOpen(true);
  }

  function handleCartClose() {
    setIsOpen(false);
    setCarIsOpen(false);
  }

  useEffect(() => {
    if (isCartOpen || isOpen) {
      document.body.classList.add("overflow-hidden");
      document.body.classList.add("max-w-full");
      document.body.classList.add("overflow-x-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isCartOpen, isOpen]);

  return (
    <>
      <div
        className="box-border gap-y-4 flex flex-col keen-slider__slide"
        onClick={handleOpen}
      >
        <div className="flex flex-col bg-gray-light1  p-4 gap-y-8   2xl:gap-y-16 ">
          <div className="self-start bg-white border border-gray-200">
            {product.tag ? (
              <p className="px-3 py-2 ">{product.tagName}</p>
            ) : null}
          </div>
          <div className="self-center">
            <img
              src={`./images/${product.img}`}
              alt="k"
              className="2xl:w-[500px]"
            />
          </div>
          <div className="self-end rounded-full bg-white inline-block w-8 p-2">
            <img src="./icons/three-dots.svg" alt="More" className="" />
          </div>
        </div>
        {product.rating ? (
          <div className="space-y-2 ">
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <h4>${product.price}</h4>
            </div>
            <div className="flex w-12 h-4">
              <img src="./icons/star.svg" alt="" />
              <img src="./icons/star.svg" alt="" />
              <img src="./icons/star.svg" alt="" />
              <img src="./icons/star.svg" alt="" />
              <img src="./icons/star.svg" alt="" />
            </div>
            <div
              className={` bg-${product.color} rounded-full inline-block w-6 h-6 p-2`}
            ></div>
          </div>
        ) : (
          <div className="space-y-2  ">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <h4>${product.price}</h4>

            <div
              className={` bg-${product.color} rounded-full inline-block w-6 h-6 p-2`}
            ></div>
          </div>
        )}
      </div>
      {isOpen && (
        <CardModal
          card={product}
          closeAction={handleClose}
          openCartAction={handleCartOpen}
          modalState={isOpen}
        />
      )}
      {isCartOpen && (
        <CartModal closeCartAction={handleCartClose} cartState={isCartOpen} />
      )}
    </>
  );
}
