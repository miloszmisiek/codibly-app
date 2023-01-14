import React, { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
import Paginate from "../components/paginate/Paginate";
import ProductsTable from "../components/productsTable/ProductsTable";
import SearchInput from "../components/searchInput/SearchInput";
import { RootState } from "../store";
import { productsActions } from "../store/products-slice";

const Home: React.FC<{ totalPages: number }> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const match = useMatch("/");
  const match1 = useMatch("/page/1");

  const active = useSelector((state: RootState) => state.products.active);
  const query = useSelector((state: RootState) => state.products.query);
  const max = useSelector((state: RootState) => state.products.options.max);
  const min = useSelector((state: RootState) => state.products.options.min);
  const loaded = useSelector(
    (state: RootState) => state.products.options.hasLoaded
  );

  const { number, id } = useParams();

  const location = useLocation();

  // window.onpopstate = () => {
  //   dispatch(productsActions.notLoaded());
  // };

  useEffect(() => {
    if (match && !match1) {
      navigate("/page/1", { replace: true });
    }
  }, [match]);

  useEffect(() => {
    // triggered on route change
    // console.log("new route: ", location);
    if (loaded) {
      const numOK =
        number && parseInt(number) > 0 && parseInt(number) <= props.totalPages;
      const idOK = id && parseInt(id) >= min && parseInt(id) <= max;
      numOK &&
        active > 0 &&
        dispatch(productsActions.changeActive(parseInt(number!)));
      if (idOK) {
        dispatch(productsActions.changeQuery(id));
      }
    }
  }, [loaded, location]);

  useEffect(() => {
    if (loaded) {
      active < 1 && dispatch(productsActions.changeActive(parseInt(number!)));
      const numNOT =
        number && (parseInt(number) < 1 || parseInt(number) > props.totalPages);
      const idNOT = id && (parseInt(id) < min || parseInt(id) > max);
      if (numNOT || idNOT) {
        navigate("/404-not-found", { replace: true });
      }
    }
  }, [loaded]);
  useEffect(() => {
    if (
      !query &&
      !match &&
      active !== parseInt(number!) &&
      loaded &&
      !!active
    ) {
      navigate(`/page/${active}`);
    }
  }, [active]);

  useEffect(() => {
    if (query && query !== id) {
      navigate(`/id/${query}`);
    }
  }, [query]);

  return (
    <>
      <Row>
        <SearchInput />
      </Row>
      <Row>
        <ProductsTable />
      </Row>
      <Row>{!query && <Paginate />}</Row>{" "}
    </>
  );
};

export default Home;
