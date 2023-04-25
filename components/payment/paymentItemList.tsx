import AddedItems from "./addedItems";
import NewArivals from "./newArrivals";

export default function PaymentItemList() {
  return (
    <div className="flex flex-col  p-4 space-y-2 max-w-[540px] ">
      <AddedItems
        name="Chocolate Chip Cookies"
        price={179.94}
        quantity={6}
        image="cookies.png"
      />
      <AddedItems
        name="Food of something"
        price={79.94}
        quantity={4}
        image="cookies.png"
      />
      <AddedItems
        name="Biscut with creem"
        price={9}
        quantity={12}
        image="cookies.png"
      />
      <NewArivals />
      <div className="flex gap-x-4 gap-y-4 py-8 px-2 justify-between border-b">
        <input
          className="  px-4 py-3 rounded-md grow"
          type="text"
          placeholder="Gift card or discount code"
        />
        <button className=" order rounded-md py-3 px-8 bg-gray-400 text-white">
          Apply
        </button>
      </div>
      <div className="flex flex-col  py-4 px-2 gap-y-2 border-b">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>$179.94</p>
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
          <span className="font-semibold">$179.94</span>
        </div>
      </div>
    </div>
  );
}
