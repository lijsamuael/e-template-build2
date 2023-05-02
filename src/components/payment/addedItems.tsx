"use client";
import ProductType from "@/interface/product";
import { addToCart } from "@/redux/cartSlice";
import { addOrder, addToOrder } from "@/redux/orderSlice";
import { useDispatch } from "react-redux";

export default function AddedItems({
  cartItem,
  isNew,
}: {
  cartItem: ProductType;
  isNew: boolean;
}) {
  const dispatch = useDispatch();

  return (
    cartItem && (
      <div className="flex justify-between items-center border-b py-2">
        <div className="flex items-center  p-2">
          <div className=" rounded-lg bg-white border border-gray-200">
            <img src={`./images/${cartItem.img}`} alt="" className="w-16" />
          </div>
          <div className="flex flex-col ">
            {isNew ? null : (
              <p className="relative bottom-[20px] right-[15px]  bg-gray-500text-white bg-black text-white rounded-full w-6 text-center">
                {cartItem.quantity}
              </p>
            )}
            <div className="relative bottom-[10px] px-4 flex flex-col">
              <p>{cartItem.name}</p>
              {isNew ? <p>${cartItem.price}</p> : null}
            </div>
          </div>
        </div>
        {isNew ? (
          <button
            onClick={() => {
              dispatch(addOrder(cartItem));
              dispatch(addToCart(cartItem));
            }}
            className="px-8 py-2 bg-secondary-dark1 rounded-md text-white"
          >
            Add
          </button>
        ) : (
          <p>${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
        )}
      </div>
    )
  );
}
