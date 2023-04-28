export default interface ProductType {
  type: string;
  id: number;
  name: string;
  img: string;
  tag: boolean;
  tagName?: string;
  price: number;
  color: string;
  rating: boolean;
  sizes: string[];
  quantity: number;
}

export interface Products {
  shirts: ProductType[];
}

export interface Data {
  products: Products[];
}
