import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NotFound from "../components/notFound/NotFound";
import SearchInput from "../components/searchInput/SearchInput";
import { HomeButton } from "../components/searchInput/styles";
import { RootState } from "../store";
import { productsActions } from "../store/products-slice";
const NotFoundPage: React.FC = () => {
  const dispatch = useDispatch();
  const active = useSelector((state: RootState) => state.products.active);
  const query = useSelector((state: RootState) => state.products.query);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productsActions.changeActive(1));
    dispatch(productsActions.changeQuery(""));
  }, [active, query]);

  return (
    <>
      <Row>
        <Col className="me-auto" xs={3} sm={6} md={5} lg={3}>
          <HomeButton
            onClick={() => {
              navigate("/");
            }}
          >
            <FontAwesomeIcon icon={faHome} />
          </HomeButton>
        </Col>
      </Row>
      <Row>
        <NotFound />
      </Row>
    </>
  );
};

export default NotFoundPage;
