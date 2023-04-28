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

export default interface FormInputs {
  inputs: InputSection[];
}
