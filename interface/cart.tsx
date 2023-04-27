import ProductType from "../interface/product"

export interface CartType{
    cartItems: ProductType[],
    totalPrice: number,
    amount: number
}