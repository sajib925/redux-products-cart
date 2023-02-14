import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import productsReducer from "./products/ProductsSlice";
import {SearchReducer} from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});
