import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import ProductsTable from "./components/productsTable/ProductsTable";
import Root from "./routes/root";

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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
