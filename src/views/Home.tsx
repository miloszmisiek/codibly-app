import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Paginate from "../components/paginate/Paginate";
import ProductsTable from "../components/productsTable/ProductsTable";
import SearchInput from "../components/searchInput/SearchInput";
import { RootState } from "../store";
import { productsActions } from "../store/products-slice";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const active = useSelector((state: RootState) => state.products.active);
  const query = useSelector((state: RootState) => state.products.query);

  const { number, id } = useParams();

  useEffect(() => {
    if (number) {
      dispatch(productsActions.changeActive(parseInt(number)));
    }
    if (id) {
      dispatch(productsActions.changeQuery(id));
    }
  }, [number, id]);

  useEffect(() => {
    number ? navigate("/page/" + number) : navigate("/page/" + active);
  }, []);

  return (
    <>
      <SearchInput />
      <ProductsTable />
      {!query && <Paginate />}
    </>
  );
};

export default Home;
