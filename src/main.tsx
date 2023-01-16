import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProductsTable from "./components/productsTable/ProductsTable";
import Root from "./routes/root";
import NotFound from "./components/notFound/NotFound";

library.add(faMagnifyingGlass, faChevronRight);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { path: "/products/page/:page", element: <ProductsTable /> },
      { path: "/products/:id", element: <ProductsTable /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
