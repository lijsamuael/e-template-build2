import { CartType } from "@/interface/cart";
import ProductType from "@/interface/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

function removeObjectWithId(arr: any, id: number) {
  const objWithIdIndex = arr.findIndex((obj: any) => obj.id === id);

  if (objWithIdIndex > -1) {
    arr.splice(objWithIdIndex, 1);
  }

  return arr;
}

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

const initialState: CartType = {
  cartItems: [],
  totalPrice: 0,
  amount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increement: (state, action: PayloadAction<ProductType>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity += 1;
      }
      const { amount, totalPrice } = calculateCartTotal(state.cartItems);
      state.amount = amount;
      state.totalPrice = totalPrice;
    },

    decreement: (state, action: PayloadAction<ProductType>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].quantity -= 1;
      }
      const { amount, totalPrice } = calculateCartTotal(state.cartItems);
      state.amount = amount;
      state.totalPrice = totalPrice;
    },

    addToCart: (state, action: PayloadAction<ProductType>) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex === -1) {
        state.cartItems.push(action.payload);
        state.amount += 1;
      } else {
        state.cartItems[itemIndex].quantity += action.payload.quantity;
      }
      const { amount, totalPrice } = calculateCartTotal(state.cartItems);
      state.amount = amount;
      state.totalPrice = totalPrice;
    },

    remove: (state, action: PayloadAction<ProductType>) => {
      removeObjectWithId(state.cartItems, action.payload.id);
      const { amount, totalPrice } = calculateCartTotal(state.cartItems);
      state.amount = amount;
      state.totalPrice = totalPrice;
    },

    selectSize: (
      state,
      action: PayloadAction<{ id: number; size: string[] }>
    ) => {
      const index = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state.cartItems[index].sizes = action.payload.size;
      }
    },

    selectColor: (
      state,
      action: PayloadAction<{ id: number; color: string[] }>
    ) => {
      const index = state.cartItems.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state.cartItems[index].sizes = action.payload.color;
      }
    },
  },
});

export const { increement, decreement, addToCart, remove, selectSize, selectColor  } = cartSlice.actions;

export default cartSlice.reducer;
