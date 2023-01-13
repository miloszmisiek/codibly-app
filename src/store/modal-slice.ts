import { createSlice } from "@reduxjs/toolkit";
import Product from "../models/product";

type ModalContextObj = {
  item: Product;
  show: boolean;
};

const initialModalState: ModalContextObj = {
  item: {
    id: -1,
    name: "",
    year: -1,
    color: "",
    pantone_value: "",
  },
  show: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    setItem(state, action) {
      state.item = action.payload;
    },
    handleClose(state) {
      state.show = false;
    },
    handleShow(state) {
      state.show = true;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;
