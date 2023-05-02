"use client";
import { CartType } from "@/interface/cart";
import { OrderType } from "@/interface/order";
import ProductType from "@/interface/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

function calculateCartTotal(cartItems: ProductType[]): {
  amount: number;
  totalPrice: number;
} {
  let amount = 0;
  let totalPrice = 0;
  for (const item of cartItems) {
    amount += item.quantity;
    totalPrice += item.quantity * item.price;
  }
  totalPrice.toFixed(2);
  return { amount, totalPrice };
}

const initialState: OrderType = {
  orderItems: [],
  totalPrice: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increement: (state, action: PayloadAction<ProductType>) => {
      const itemIndex = state.orderItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.orderItems[itemIndex].quantity += 1;
      }
      const { amount, totalPrice } = calculateCartTotal(state.orderItems);
      state.amount = amount;
      state.totalPrice = totalPrice;
    },

    decreement: (state, action: PayloadAction<ProductType>) => {
      const itemIndex = state.orderItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.orderItems[itemIndex].quantity -= 1;
      }
      const { amount, totalPrice } = calculateCartTotal(state.orderItems);
      state.totalPrice = totalPrice;
    },
    addByAmount: (state, action: PayloadAction<ProductType>) => {
      const itemIndex = state.orderItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.orderItems[itemIndex].quantity += action.payload.quantity;
      }
      const { amount, totalPrice } = calculateCartTotal(state.orderItems);
      state.totalPrice = totalPrice;
    },

    addToOrder: (state, action: PayloadAction<CartType>) => {
      state.orderItems = action.payload.cartItems;
      state.totalPrice = action.payload.totalPrice;
      state.amount = action.payload.amount;
    },

    addOrder: (state, action: PayloadAction<ProductType>) => {
      const itemIndex = state.orderItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.orderItems.push(action.payload);
        state.amount += 1;
      } else {
        state.orderItems[itemIndex].quantity += action.payload.quantity;
      }
      const { amount, totalPrice } = calculateCartTotal(state.orderItems);
      state.amount = amount;
      state.totalPrice = totalPrice;
    },
  },
});

export const { increement, decreement, addByAmount, addToOrder, addOrder } =
  cartSlice.actions;

export default cartSlice.reducer;
