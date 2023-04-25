import Link from "next/link";

export default function HeaderLink() {
  return (
    <div className="flex pt-28  lg:pt-2 text-sm ssm:text-base">
      <Link href={""}>Cart</Link>
      <img
        src="./icons/greater.png"
        alt=""
        className="w--[16px] ssm:w-[25px] h-[10px] ssm:h-[16px] self-center"
      />
      <Link href={""}>Information</Link>
      <img
        src="./icons/greater.png"
        alt=""
        className="w--[16px] ssm:w-[25px] h-[10px] ssm:h-[16px] self-center"
      />

      <Link href={""}>Shipping</Link>
      <img
        src="./icons/greater.png"
        alt=""
        className="w--[16px] ssm:w-[25px] h-[10px] ssm:h-[16px] self-center"
      />

      <Link href={""}>Payment</Link>
    </div>
  );
}
