import { RootState } from "@/app/store";
import { useSelector } from "react-redux";

export default function ShowOrderSummaryTag() {
  const cart = useSelector((state: RootState) => state.cart);

  return (
    <div className="flex  flex-wrap gap-y-2 justify-between lg:hidden absolute top-[180px] w-full border-t border-b px-[5%] sm:px-[15%] py-6 border-gray-300 my-4 bg-gray-50">
      <div className="flex  justify-between items-center gap-x-2">
        <img src="./icons/cart.png" alt="" className=" w-4 ssm:w-6" />
        <div className="flex items-center gap-x-1 ">
          <p className="text-blue-500 whitespace-nowrap text-sm ssm:text-base">
            Show Order Summery
          </p>
          <img src="./icons/downward.png" alt="" className="w-4 ssm:w-6 " />
        </div>
      </div>
      <p className="text-sm ssm:text-base">${cart.totalPrice.toFixed(2)}</p>
    </div>
  );
}
