import { Col } from "react-bootstrap";
import NotFoundImg from "../../assets/404-error-icon-7.png";
import { ColNF } from "./styles";

const NotFound: React.FC = () => {
  return (
    <ColNF>
      <img src={NotFoundImg} height="300" />
    </ColNF>
  );
};

export default NotFound;
