"use client";
import Link from "next/link";
// import AdressForm from "./adressForm";
// import Checkouts from "./checkouts";
// import ContactInfo from "./contactInfo";
// import HeaderLink from "./headerLink";
// import Policies from "./policies";
// import PosterMark from "./posterMark";
// import ShowOrderSummaryTag from "./showOrderSummaryTag";
// import AddedItems from "./addedItems";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import ProductType from "@/interface/product";
import ShowOrderSummaryTag from "@/components/payment/showOrderSummaryTag";
import HeaderLink from "@/components/payment/headerLink";
import ContactInfo from "@/components/payment/contactInfo";
import AdressForm from "@/components/payment/adressForm";
import AddedItems from "@/components/payment/addedItems";

export default function PaymentForm() {
  const products = useSelector((state: RootState) => state.products);

  const selectedItems: ProductType[] = [];

  const shirts = products.filter((item) => item.type === "shirt");
  const numShirts = shirts.length;

  while (selectedItems.length < 3) {
    const index = Math.floor(Math.random() * numShirts);
    const selectedItem = shirts[index];
    if (!selectedItems.some((item) => item.id === selectedItem.id)) {
      selectedItems.push(selectedItem);
    }
  }

  return (
    <div className="flex flex-col items-center space-y-8 lg:max-w-[660px]   lg:ml-auto">
      <img src="./images/logo.png" alt="" />
      <ShowOrderSummaryTag />
      <HeaderLink />
      <div className="flex flex-col lg:hidden w-full">
        {/* <NewArivals /> */}
        {selectedItems.map((item, index) =>
          item.type === "shirt" ? (
            <AddedItems key={index} cartItem={item} isNew={true} />
          ) : null
        )}
      </div>
      {/* <Checkouts /> */}
      {/* <div className=" flex flex-col  w-full">
        <p className="relative top-[12px] self-center bg-white px-4">OR</p>
        <hr />
      </div> */}
      <ContactInfo />
      <AdressForm />
      <div className="flex space-x-4 self-start">
        <input type="checkbox" className="w-6 h-6 rounded-full" />
        <span>
          Text me with new competitions, products and special descounts -
          exclusive via only SMS
        </span>
      </div>
      {/* <div className="flex justify-between w-full border rounded-lg p-2 ">
        <div className="flex justify-start items-center gap-x-2">
          <img src="./icons/leaf.png" alt="" className="w-8 sm:w-16 h-8" />
          <div className="flex flex-col">
            <p className="text-base  sm:text-lg font-semibold ">
              Match our donation for $0.56
            </p>
            <div className="flex flex-wrap items-center gap-x-2">
              <p className="text-sm sm:text-noramal">powered by </p>
              <img src="./icons/ecocart.png" alt="" className="w-20 " />
            </div>
          </div>
        </div>
        <PosterMark />
      </div> */}
      <div className="flex flex-wrap-reverse justify-between w-full items-center gap-y-4">
        <div className="flex   items-center mx-auto sm:m-1 gap-x-2">
          <img src="./icons/smaller.png" alt="" className="w-4 " />
          <Link href="/" className="text-blue-500">
            Return to Cart
          </Link>
        </div>
        <button className="p-4 bg-blue-700 rounded-lg text-white w-full sm:w-64">
          Continue to shipping
        </button>
      </div>
      <hr className="w-full" />
      {/* <Policies /> */}
    </div>
  );
}
