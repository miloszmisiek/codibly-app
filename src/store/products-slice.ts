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
    hasLoaded: boolean;
    responseOk: boolean;
  };
};

const initialProductsState: ProductContextObj = {
  items: [],
  active: 0,
  query: "",
  options: {
    totalPages: 0,
    min: 1,
    max: 0,
    hasLoaded: false,
    responseOk: true,
  },
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
    notLoaded(state) {
      state.options.hasLoaded = false;
    },
    loaded(state) {
      state.options.hasLoaded = true;
    },
    responseOK(state) {
      state.options.responseOk = true;
    },
    responseNOT(state) {
      state.options.responseOk = false;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;
