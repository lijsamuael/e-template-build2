
import ProductType from "../interface/product"

export interface OrderType{
    orderItems: ProductType[],
    totalPrice: number,
    amount: number
}
export interface InputItem {
  name: string;
  inputType: string;
  placeholder: string;
  type: string;
  class: string;
  img: string;
}

export interface InputSection {
  size: number;
  class: string;
  warning: string;
  heading: InputItem[];
}

export  interface FormInputs {
  inputs: InputSection[];
}
