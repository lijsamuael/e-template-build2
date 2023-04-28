"use client"

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import ProductType from "../interface/product";
import data from "../model/data.json";

function removeObjectWithId(arr: any, id: number) {
  const objWithIdIndex = arr.findIndex((obj: any) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

const initialState: ProductType[] = data.product;

export const productSlice = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductType>) => {
      state.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      removeObjectWithId(state, action.payload);
    },
    changeQuantity: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state[index].quantity = action.payload.quantity;
      }
    },
  }
});

export const { addProduct, removeProduct, changeQuantity } = productSlice.actions;
export default productSlice.reducer;
