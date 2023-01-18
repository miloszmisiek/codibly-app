import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from "react-router-dom";
import NotFoundImg from "../../assets/images/404-error.png";
import { RootState } from "../../store";
import { productsActions } from "../../store/products-slice";
import {
  ButtonBackHome,
  ColNF,
  NotFoundMsg,
  OverlayImage,
  WrongMessage,
} from "./styles";
import BrokenGlass from "../../assets/images/broken-glass.png";

const NotFound: React.FC = () => {
  const dispatch = useDispatch();
  const active = useSelector((state: RootState) => state.products.active);
  const query = useSelector((state: RootState) => state.products.query);
  const error = useRouteError();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productsActions.changeActive(""));
    dispatch(productsActions.changeQuery(""));
    return () => {
      dispatch(productsActions.responseOK());
    };
  }, [active, query, dispatch]);

  if (isRouteErrorResponse(error)) {
    return (
      <ColNF>
        {error.status === 404 ? (
          <>
            <img src={NotFoundImg} height="300" alt="Not Found"></img>
            <NotFoundMsg>
              The site you are looking for was not found
            </NotFoundMsg>
          </>
        ) : (
          <>
            <OverlayImage src={BrokenGlass} alt="Broken glass overlay" />
            <h1>Oops!</h1>
            <h2>{error.status}</h2>
            <p>{error.statusText}</p>
          </>
        )}
        <ButtonBackHome
          role="button"
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Back to Home
        </ButtonBackHome>
      </ColNF>
    );
  } else {
    return (
      <ColNF>
        <OverlayImage src={BrokenGlass} alt="Broken glass overlay" />
        <h1>Oops!</h1>
        <WrongMessage>Something went wrong!</WrongMessage>
        <ButtonBackHome
          role="button"
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Back to Home
        </ButtonBackHome>
      </ColNF>
    );
  }
};

export default NotFound;
