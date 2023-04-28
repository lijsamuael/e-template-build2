"use client";

import Link from "next/link";
import { MouseEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity } from "@/redux/productSlice";
import { selectSize } from "@/redux/cartSlice";

import CloseIcon from "../icons/close";
import ProductType from "@/interface/product";
import { addToCart } from "@/redux/cartSlice";

interface CardModalProps {
  modalState: boolean;
  card: ProductType;
  closeAction: MouseEventHandler<HTMLButtonElement>;
  openCartAction: MouseEventHandler<HTMLButtonElement>;
}

export default function CardModal(props: CardModalProps) {
  function handleClose(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (
      (event.target as HTMLElement).id === "container" ||
      (event.target as HTMLElement).id === "closeButton"
    ) {
      props.closeAction(event);
    }
  }
  function handleCartOpen(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    dispatch(addToCart(card));
    props.openCartAction(event);
  }
  const { modalState, card } = props;

  const [selectedSize, setSelectedSize] = useState(card.sizes);

  const handleSizeChange = (event: any) => {
    setSelectedSize(event.target.value);
    dispatch(
      selectSize({
        id: card.id,
        size: event.toString().split(" "),
      })
    );
  };

  const dispatch = useDispatch();

  return (
    <>
      {modalState && (
        <button
          id="container"
          onClick={handleClose}
          className=" text-secondary-normal fixed z-10 top-0 left-0 bg-gray-dark2 h-screen w-full flex items-start justify-end gap-x-4 bg-opacity-40"
        >
          <div className="flex flex-col lf-end justify-between overflow-y-auto top-0 w-[380px] bg-white h-screen  space-y-4  ">
            <div className="px-4 flex flex-col gap-y-12">
              <button
                id="closeButton"
                className="self-end pt-4 w-12 "
                onClick={handleClose}
              >
                <div className="p-1 bg-secondary-dark3 w-8 rounded-lg ">
                  <CloseIcon />
                </div>
              </button>
              <div className="flex flex-col bg-gray-100 mx-8 h-72 py-16 justify-center gap-y-4">
                <p className="text-center">SELECT Options</p>
                <h1 className="text-center text-3xl font-bold">{card.name}</h1>
                <div className="self-center px-4">
                  <img
                    src={`./images/${card.img}`}
                    alt=""
                    className=" 2xl:w-[500px]"
                  />
                </div>
              </div>

              <div className="p flex flex-col items-start gap-y-6 pt-2">
                <div className="space-y-2 flex flex-col items-start">
                  <p className="pt-4">${card.price}</p>
                  <p className="font-bold">QUANTITY</p>
                  <input
                    // placeholder={card.quantity.toString()}
                    placeholder="1"
                    type="text"
                    className="border border-gray-400 w-12 px-2 py-1"
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value);
                      dispatch(
                        changeQuantity({ id: card.id, quantity: newQuantity })
                      );
                    }}
                  />
                </div>
                <div className="flex flex-col items-start space-x-2 ">
                  <div className="flex items-center justify-start gap-x-2">
                    <p className="font-bold">COLOR</p>{" "}
                    <span className="text-xs text-secondary-dark2">
                      SEA FOAM
                    </span>
                  </div>
                  <div
                    className={`w-6 h-6 border border-black rounded-full bg-${card.color}`}
                  ></div>
                </div>
                <div className="flex flex-col items-start">
                  <p className="font-bold">SIZE</p>
                  <div className="flex gap-x-6">
                    {card.sizes.map((size, index) => (
                      <label key={index} className="flex items-center gap-x-2">
                        <input
                          type="checkbox"
                          className="sr-only"
                          name="size"
                          value={size}
                          checked={selectedSize[0] === size}
                          onChange={handleSizeChange}
                        //
                        />
                        <span
                          className={`font-semibold flex items-center justify-center border border-gray-600 h-12 w-12 text-xs ${selectedSize[0] === size
                            ? "border-4 border-secondary-dark3"
                            : ""
                            }`}
                        >
                          <label htmlFor={`size-${index}`}>{size}</label>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4 px-2">
              <button
                className="mb-2 w-full py-1 text-center border-2 border-black"
                onClick={handleCartOpen}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </button>
      )}
      { }
    </>
  );
}
