import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  loading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    itemsFiltered: (state, action) => {
      state.allProducts = state.allProducts.filter((product) =>
        product.title.toLowerCase().includes(action.payload)
      );
    },
  },
});

export const {setProducts,itemsFiltered} = productsSlice.actions;

export default productsSlice.reducer;
