import { createSlice } from "@reduxjs/toolkit";

type AlertContextObj = {
  show: boolean;
  variant: string;
  message: string;
};

const initialAlertlState: AlertContextObj = {
  show: false,
  variant: "",
  message: "",
};

const alertSlice = createSlice({
  name: "alert",
  initialState: initialAlertlState,
  reducers: {
    setVariant(state, action) {
      state.variant = action.payload;
    },
    handleClose(state) {
      state.show = false;
    },
    handleShow(state) {
      state.show = true;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const alertActions = alertSlice.actions;

export default alertSlice.reducer;
