import { createSlice } from "@reduxjs/toolkit";
import Product from "../models/product";

type ProductContextObj = {
  items: Product[];
  active: number;
  query: string;
  options: {
    totalPages: number;
    min: number;
    max: number;
  };
};

const initialProductsState: ProductContextObj = {
  items: [],
  active: 1,
  query: "",
  options: { totalPages: 1, min: 1, max: 0 },
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialProductsState,
  reducers: {
    replaceProducts(state, action) {
      state.items = action.payload.items;
      state.options.totalPages = action.payload.total_pages;
    },
    changeActive(state, action) {
      state.active = action.payload;
    },
    changeQuery(state, action) {
      state.query = action.payload;
    },
    changeMinMax(state, action) {
      state.options.min = action.payload.min;
      state.options.max = action.payload.max;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
