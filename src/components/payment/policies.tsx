import Link from "next/link";

export default function Policies(){
    return(
        <div className="flex flex-wrap w-full justify-start text-blue-500 gap-x-8">
        <Link href={""}>Refund Policy</Link>
        <Link href={""}>Shipping Policy</Link>
        <Link href={""}>Privacy Policy</Link>
        <Link href={""}>Terms of Service</Link>
        <Link href={""}>Purchase Options</Link>
        <Link href={""}>Cancellation Policy</Link>
      </div>
    );
}