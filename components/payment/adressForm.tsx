import Warnning from "./warnning";
import countries from "./countries";

const inputs = [
  {
    size: 2,
    class: "grid grid-cols-1 sm:grid-cols-2 gap-4",
    warning: "",
    heading: [
      {
        name: "First name",
        inputType: "option",
        placeholder: "First name",
        type: "text",
        class: "",
        image: "",
      },
      {
        name: "Last name",
        inputType: "option",
        placeholder: "Last name",
        type: "text",
        class: "",
        image: "",
      },
    ],
  },
  {
    size: 1,
    class: "",
    warning:
      "Heads up, once an order has been placed we can not cancel or make changes",
    heading: [
      {
        name: "Adress",
        inputType: "option",
        placeholder: "Adress",
        type: "text",
        class: "",
        image: "",
      },
    ],
  },
  {
    size: 1,
    class: "",
    warning: "",
    heading: [
      {
        name: "Appartment, suit, etc. (optional)",
        inputType: "option",
        placeholder: "Appartment, suit, etc. (optional)",
        type: "text",
        class: "",
        image: "",
      },
    ],
  },
  {
    size: 3,
    class: "grid grid-cols-1 sm:grid-cols-3 gap-4",
    warning: "",
    heading: [
      {
        name: "City",
        inputType: "option",
        placeholder: "City",
        type: "text",
        class: "",
        image: "",
      },
      {
        name: "State",
        inputType: "option",
        placeholder: "State",
        type: "text",
        class: "",
        image: "",
      },
      {
        name: "ZIP code",
        inputType: "option",
        placeholder: "ZIP code",
        type: "text",
        class: "",
        image: "",
      },
    ],
  },
  {
    size: 1,
    class: "",
    warning: "",
    heading: [
      {
        name: "Phone",
        inputType: "option",
        placeholder: "Phone",
        type: "text",
        class: "",
        image: "question.png",
      },
    ],
  },
];

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
            className="focus:outline-0 bg-white  border-gray-300  text-gray-900  border-l rounded-lg  w-full p-4 flex justify-around appearance-none"
          >
            <option selected>Country/Region</option>
            {countries.map((country) => (
              <option value={country.name}>{country.name}</option>
            ))}
          </select>
          <img
            src="./icons/downward.png
          "
            alt=""
            className="p-4 w-12"
          />
        </div>
        {inputs.map((input) =>
          input.size === 1 ? (
            input.heading.map((data) => (
              <div className="flex items-center border rounded-lg">
                <input
                  type={data.inputType}
                  placeholder={data.placeholder}
                  className=" p-4  w-full focus:outline-0 border-l rounded-lg"
                />
                <img
                  src={`./icons/${data.image}`}
                  alt=""
                  className="p-4 w-12"
                />
              </div>
            ))
          ) : (
            <div className={input.class}>
              {input.heading.map((data) => (
                <input
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
