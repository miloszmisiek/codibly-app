import Product from "../models/product";
import React, { useEffect, useState } from "react";
import axios from "axios";

type ProductContextObj = {
  items: Product[];
  active: number;
  query: string;
  options: {
    totalPages: number;
    min: number;
    max: number;
  };
  changeActive: (newActive: number) => void;
  changeQuery: (newQuery: string) => void;

  //   addTodo: (text: string) => void;
  //   removeTodo: (id: number) => void;
};

export const ProductsContext = React.createContext<ProductContextObj>({
  items: [],
  active: 1,
  query: "",
  options: { totalPages: 1, min: 1, max: 0 },
  changeActive: (newActive: number) => {},
  changeQuery: (newQuery: string) => {},
  //   removeTodo: (id: number) => {},
});

const ProductsContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [options, setOptions] = useState<ProductContextObj["options"]>({
    totalPages: 1,
    min: 1,
    max: 0,
  });
  const [active, setActive] = useState<number>(1);
  const [query, setQuery] = useState<string>("");

  const handleMount = async () => {
    try {
      const { data } = await axios.get(
        `https://reqres.in/api/products/?page=${active}&per_page=5&id=${query}`
      );
      setProducts(query ? [data.data] : data.data);
      setOptions((prev) => ({ ...prev, totalPages: data.total_pages }));
    } catch (err) {
        console.log(err);
    }
  };

  const handleOptions = async () => {
    const { data } = await axios.get(
      "https://reqres.in/api/products/?per_page=99999999"
    );
    setOptions((prev) => ({
      ...prev,
      min: Math.min(...data.data.map((o: Product) => o.id)),
      max: Math.max(...data.data.map((o: Product) => o.id)),
    }));
  };

  useEffect(() => {
    handleMount();
  }, [active, query]);

  useEffect(() => {
    handleOptions();
  }, []);

  const changeActive = (newActive: number) => {
    setActive(newActive);
  };
  const changeQuery = (newQuery: string) => {
    setQuery(newQuery);
  };
  //   const addTodoHandler = (text: string) => {
  //     const newTodo = new Todo(text, todos.length);

  //     setTodos((prevTodos) => prevTodos.concat(newTodo));
  //   };

  //   const removeTodoHandler = (todoId: number) => {
  //     setTodos((prevTodos) => prevTodos.filter((itm) => itm.id !== todoId));
  //   };

  const contextValue: ProductContextObj = {
    items: products,
    active: active,
    query: query,
    options: options,
    changeActive: changeActive,
    changeQuery: changeQuery,
    // addTodo: addTodoHandler,
    // removeTodo: removeTodoHandler,
  };
  return (
    <ProductsContext.Provider value={contextValue}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
