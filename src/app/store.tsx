"use client"
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/productSlice";
import cartReducer from "@/redux/cartSlice";
import orderReducer from "@/redux/orderSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    order: orderReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
