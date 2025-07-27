import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
        toast("Product is already in the cart!")
      } else {
        state.cart.push({ ...product, quantity: 1});
        toast.success("Product is added in the cart!")
      }
    }
  },
});

export const { setCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
