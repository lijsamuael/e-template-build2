import Warnning from "./warnning";
import data from "../../model/data.json";

export default function AdressForm() {
  return (
    <div className="flex flex-col self-start w-full gap-y-4">
      <h2 className="text-xl font-medium">Shipping Address</h2>
      <Warnning message="Please check your address to ensure accurate delivery." />
      <form action="" className="flex flex-col text-gray-600 gap-4">
        <div className="flex items-center border rounded-lg">
          <select
            name=""
            id=""
            className="focus:outline-0 bg-white  border-gray-300  text-gray-900  rounded-lg  w-full p-4 flex justify-around appearance-none"
          >
            <option selected>Country/Region</option>
            {data.countries.map((country, index) => (
              <option key={index} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <img
            src="./icons/downward.png
          "
            alt=""
            className="p-4 w-12"
          />
        </div>
        {data.inputs.map((input, index) =>
          input.size === 1 ? (
            input.heading.map((data) => (
              <div key={index} className="flex items-center border rounded-lg">
                <input
                  type={data.inputType}
                  placeholder={data.placeholder}
                  className=" p-4  w-full focus:outline-0 border- rounded-lg"
                />
                <img src={`./icons/${data.img}`} alt="" className="p-4 w-12" />
              </div>
            ))
          ) : (
            <div key={index} className={input.class}>
              {input.heading.map((data, index) => (
                <input
                  key={index}
                  type={data.inputType}
                  placeholder={data.placeholder}
                  className="border rounded-lg p-4 w-full focus:outline-0 "
                />
              ))}
            </div>
          )
        )}
      </form>
    </div>
  );
}
