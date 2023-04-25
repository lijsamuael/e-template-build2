import PaymentForm from "@/components/payment/paymentForm";
import PaymentItemList from "@/components/payment/paymentItemList";

export default function Payment() {
  return (
    <div className=" font-sans flex   gap-x-16 w-full ">
      <div className=" pt-16 bg-white w-full lg:w-[55%] items-center lg:flex-none pl-[5%] sm:pl-[10%] lg:pl-[2%] ">
        <PaymentForm />
      </div>
      <div className=" pt-8 bg-gray-light1 w-full  p-4 hidden lg:flex">
        <PaymentItemList />
      </div>
    </div>
  );
}
