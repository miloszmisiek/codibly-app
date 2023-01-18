import { useNavigate, useMatch, Outlet, useParams } from "react-router-dom";
import MyModal from "../components/modal/MyModal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { HomeButton } from "../components/searchInput/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { productsActions } from "../store/products-slice";
import SearchInput from "../components/searchInput/SearchInput";
import {
  fetchProductsData,
  fetchProductsOptions,
} from "../store/products-actions";
import { MainContainer } from "./styles";

function Root() {
  let { page, id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const match = useMatch("/");
  const matchPage1 = useMatch("/products/page/1");
  const active = useSelector((state: RootState) => state.products.active);
  const query = useSelector((state: RootState) => state.products.query);
  const max = useSelector((state: RootState) => state.products.options.max);
  const min = useSelector((state: RootState) => state.products.options.min);
  const responseOk = useSelector(
    (state: RootState) => state.products.options.responseOk
  );
  const totalPages = useSelector(
    (state: RootState) => state.products.options.totalPages
  );
  const loaded = useSelector(
    (state: RootState) => state.products.options.hasLoaded
  );

  useEffect(() => {
    if (!responseOk) {
      navigate("/not-found", { replace: true });
    }
  }, [navigate, responseOk]);

  useEffect(() => {
    if (match) {
      navigate("/products/page/1", { replace: true });
    }
  }, [navigate, match, dispatch]);

  useEffect(() => {
    (active || query) && dispatch(fetchProductsData());
  }, [active, dispatch, query]);

  useEffect(() => {
    loaded && !max && dispatch(fetchProductsOptions());
  }, [dispatch, loaded, max]);

  useEffect(() => {
    if (loaded) {
      const pageErr =
        page && (parseInt(page) > totalPages || parseInt(page) < 0);
      const idErr = id && (parseInt(id) < min || parseInt(id) > max);

      if (pageErr || idErr) {
        navigate("/not-found", { replace: true });
      }
    }
  }, [loaded, id, max, min, navigate, page, totalPages]);

  useEffect(() => {
    if (page) {
      dispatch(productsActions.changeActive(page));
      dispatch(productsActions.changeQuery(""));
    }
  }, [dispatch, page]);

  useEffect(() => {
    if (id) {
      dispatch(productsActions.changeQuery(id));
      dispatch(productsActions.changeActive(""));
    }
  }, [dispatch, id]);

  return (
    <MainContainer>
      <MyModal />
      <Row>
        <Col className="me-auto" xs={3} sm={6} md={5} lg={3}>
          <HomeButton
            onClick={() => {
              if (!matchPage1) {
                navigate("/");
              }
            }}
          >
            <FontAwesomeIcon icon={faHome} />
          </HomeButton>
        </Col>
        <SearchInput />
      </Row>
      <Row>
        <div id="detail">
          <Outlet />
        </div>
      </Row>
    </MainContainer>
  );
}

export default Root;
