export default function AddedItems({
  image,
  quantity,
  name,
  price,
  isNew,
}: {
  image: string;
  quantity: number;
  name: string;
  price: number;
  isNew?: boolean;
}) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <div className="flex items-center  p-2">
        <div className=" rounded-lg bg-white border border-gray-200">
          <img src={`./images/${image}`} alt="" className="w-16" />
        </div>
        <div className="flex flex-col ">
          {isNew ? null : (
            <p className="relative bottom-[20px] right-[15px]  bg-gray-500 text-white rounded-full w-6 text-center">
              {quantity}
            </p>
          )}
          <div className="relative bottom-[10px] px-4 flex flex-col">
            <p>{name}</p>
            {isNew ? <p>${price}</p> : null}
          </div>
        </div>
      </div>
      {isNew ? (
        <button className="px-8 py-2 bg-blue-500 rounded-md text-white">
          Add
        </button>
      ) : (
        <p>${price}</p>
      )}
    </div>
  );
}
