import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
import NotFoundImg from "../../assets/404-error-icon-7.png";
import { RootState } from "../../store";
import { productsActions } from "../../store/products-slice";
import {
  ImageBorder,
  SpinnerWrapper,
  WrongMessage,
} from "../productsTable/styles";
import { ColNF } from "./styles";
import Dead from "../../assets/dead.png";

const NotFound: React.FC = () => {
  const dispatch = useDispatch();
  const active = useSelector((state: RootState) => state.products.active);
  const query = useSelector((state: RootState) => state.products.query);
  const error = useRouteError();

  useEffect(() => {
    dispatch(productsActions.changeActive(1));
    dispatch(productsActions.changeQuery(""));
  }, [active, query, dispatch]);
  if (isRouteErrorResponse(error)) {
    return (
      <ColNF>
        {error.status === 404 ? (
          <img src={NotFoundImg} height="300" alt="Not Found"></img>
        ) : (
          <h1>Oops</h1>
        )}
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </ColNF>
    );
  } else {
    return (
      <>
        <SpinnerWrapper>
          <ImageBorder>
            <img src={Dead} alt="Error Emoji"></img>
          </ImageBorder>
          <WrongMessage>Oops... Something went wrong!</WrongMessage>
        </SpinnerWrapper>
      </>
    );
  }
};

export default NotFound;
