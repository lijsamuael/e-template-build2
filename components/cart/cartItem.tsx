import { useDispatch, useSelector } from "react-redux";

import ProductType from "@/interface/product";
import { remove, increement, decreement } from "@/redux/cartSlice";

export default function CartItem({
  cards,
  quantity,
}: {
  cards: ProductType[];
  quantity: number;
}) {
  const dispatch = useDispatch();

  return (
    <>
      {cards.map((card, index) => (
        <div key={index}>
          <div className="flex flex-col gap-y-4 pt-4">
            <h1 className="text-center text-2xl font-bold">{card.name}</h1>
            <div className="flex gap-x-4">
              <div className="w-2/3 flex flex-col bg-gray-100 mx-2 py-2 justify-center ">
                <div className=" self-center px-4">
                  <img
                    src={`./images/${card.image}`}
                    alt=""
                    className="w-full"
                  />
                </div>
              </div>
              <div className="w-1/3 space-y-3 self-center">
                <div>
                  <p>
                    {card.color} / {card.sizes[0]}
                  </p>
                  <p>${card.price}</p>
                </div>
                <div className="flex ">
                  <button
                    onClick={() => dispatch(decreement(card))}
                    className="border border-black py-1 px-2"
                  >
                    -
                  </button>
                  <span className="border-b border-t  border-black py-1 px-2">
                    {card.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(increement(card))}
                    className="border border-black py-1 px-2"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => dispatch(remove(card))}
                  className="border-b border-black text-xs"
                >
                  REMOVE
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </>
  );
}
