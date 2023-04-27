export default interface ProductType {
  type?: string;
  id?: number;
  name: string;
  image: string;
  tag: boolean;
  tagName?: string;
  price: number;
  color: string[];
  rating: boolean;
  sizes: string[];
}

export interface Products {
  shirts: ProductType[];
}

export interface Data {
  products: Products[];
}
