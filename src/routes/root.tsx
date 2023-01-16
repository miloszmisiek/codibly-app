
import {
  useNavigate,
  useMatch,
  Outlet,
  useParams,
} from "react-router-dom";
import MyModal from "../components/modal/MyModal";
import { MainContainer } from "../App.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import MyAlert from "../components/alert/MyAlert";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { HomeButton } from "../components/searchInput/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { productsActions } from "../store/products-slice";
import SearchInput from "../components/searchInput/SearchInput";

function Root() {
  let { page } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const match = useMatch("/");
  const matchPage1 = useMatch("/products/page/1");

  useEffect(() => {
    if (match) {
      navigate("/products/page/1", { replace: true });
      dispatch(productsActions.changeActive(page));
    }

  }, [page, navigate, match, dispatch]);
  const show = useSelector((state: RootState) => state.alert.show);

  return (
    <MainContainer>
      {show && <MyAlert />}
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
