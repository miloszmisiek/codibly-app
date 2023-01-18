import { AppDispatch } from ".";
import { productsActions } from "./products-slice";
import store from ".";
import Product from "../models/product";

export const fetchProductsData = () => {
  return async (dispatch: AppDispatch) => {
    const active = store.getState().products.active;
    const query = store.getState().products.query;
    dispatch(productsActions.notLoaded());

    const fetchData = async () => {
      const response = await fetch(
        `https://reqres.in/api/products/?page=${active}&per_page=5&id=${query}`
      );
      if (!response.ok) {
        dispatch(productsActions.responseNOT());

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
      dispatch(productsActions.responseNOT());
    }
  };
};

export const fetchProductsOptions = () => {
  return async (dispatch: AppDispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reqres.in/api/products/?per_page=99999999"
      );

      if (!response.ok) {
        dispatch(productsActions.notLoaded());
        dispatch(productsActions.responseNOT());
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
      dispatch(productsActions.responseNOT());
    }
  };
};
