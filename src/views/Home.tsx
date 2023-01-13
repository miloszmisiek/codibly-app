import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import Paginate from "../components/paginate/Paginate";
import ProductsTable from "../components/productsTable/ProductsTable";
import SearchInput from "../components/searchInput/SearchInput";
import { RootState } from "../store";
import { productsActions } from "../store/products-slice";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const match = useMatch('/');

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
    number
      ? navigate("/page/" + number)
      : id
      ? navigate("/id/" + id)
      : navigate("/page/" + active);
  }, [active, match]);

  return (
    <>
      <Row>
        <SearchInput />
      </Row>
      <Row>
        <ProductsTable />
      </Row>
      <Row>{!query && <Paginate />}</Row>
    </>
  );
};

export default Home;
