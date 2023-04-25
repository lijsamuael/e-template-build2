export default function CartItem({
    title,
    image,
    color,
    price,
    size,
    quantity,
  }: {
    title: string;
    image: string;
    color: string;
    price: number;
    size: string;
    quantity: number;
  }) {
    return (
      <div className="flex flex-col gap-y-4">
        <h1 className="text-center text-2xl font-bold">{title}</h1>
        <div className="flex gap-x-4">
          <div className="flex flex-col bg-gray-100 mx-2 h-36 ssm:h-48 py-8 justify-center">
            <div className="self-center px-4">
              <img src={`./images/${image}`} alt="" className="w-[90px]" />
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p>{color} / {size}</p>
              <p>${price}</p>
            </div>
            <div className="flex ">
              <button className="border border-black py-1 px-2">-</button>
              <span className="border-b border-t  border-black py-1 px-2">{quantity}</span>
              <button className="border border-black py-1 px-2">+</button>
            </div>
            <button className="border-b border-black text-xs">REMOVE</button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
  