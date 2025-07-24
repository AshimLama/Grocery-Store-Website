import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    //action
    setCart: (state, action) => {
      state.cart = action.payload;
    },

    addToCart: (state, action) => {
      const product = action.payload;

      const existingProduct = state.cart.find(item => item.id === product.id);

      if (existingProduct){
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1});
      }
    }
  },
});

export const { setCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
