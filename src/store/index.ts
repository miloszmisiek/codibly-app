import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products-slice";
import modalReducer from "./modal-slice";
import alertReducer from "./alert-slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    modal: modalReducer,
    alert: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
