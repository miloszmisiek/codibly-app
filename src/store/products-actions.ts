import { AppDispatch } from ".";
import { productsActions } from "./products-slice";

import store from ".";
import Product from "../models/product";
import { alertActions } from "./alert-slice";

export const fetchProductsData = () => {
  return async (dispatch: AppDispatch) => {
    const active = store.getState().products.active;
    const query = store.getState().products.query;
    const fetchData = async () => {
      const response = await fetch(
        `https://reqres.in/api/products/?page=${
          active ? active : 1
        }&per_page=5&id=${query ? query : ""}`
        // `https://reqres.in/api/produ/adasd/sdadas`
      );
      if (!response.ok) {
        dispatch(productsActions.responseNOT());
        dispatch(
          alertActions.setMessage(
            "Something went wrong! Could not fetch products data!"
          )
        );
        dispatch(alertActions.setVariant("danger"));
        dispatch(alertActions.handleShow());

        throw new Error("Could not fetch products data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const productData = await fetchData();

      dispatch(
        productsActions.replaceProducts({
          items: productData.data.length
            ? productData.data
            : !Array.isArray(productData.data)
            ? [productData.data]
            : [],
          total_pages: productData.total_pages,
        })
      );
      dispatch(productsActions.loaded());
    } catch (error) {
      // console.log(error);
      dispatch(productsActions.responseNOT());
      dispatch(
        alertActions.setMessage(
          "Something went wrong! Could not fetch products data!"
        )
      );
      dispatch(alertActions.setVariant("danger"));
      dispatch(alertActions.handleShow());
    }
  };
};

export const fetchProductsOptions = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reqres.in/api/products/?per_page=99999999"
        // "https://reqres.in/api/products//asdasda/dasdasd"
      );

      if (!response.ok) {
        dispatch(productsActions.notLoaded());
        dispatch(productsActions.responseNOT());
        dispatch(
          alertActions.setMessage(
            "Something went wrong! Could not fetch products options!"
          )
        );
        dispatch(alertActions.setVariant("danger"));
        dispatch(alertActions.handleShow());
        throw new Error("Could not fetch products options!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const productData = await fetchData();

      dispatch(
        productsActions.changeMinMax({
          min: Math.min(...productData.data.map((o: Product) => o.id)),
          max: Math.max(...productData.data.map((o: Product) => o.id)),
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};
