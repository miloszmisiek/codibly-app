import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { MyPagination } from "./styles";

const Paginate: React.FC = () => {
  let pages = [];

  const navigate = useNavigate();
  const totalPages = useSelector(
    (state: RootState) => state.products.options.totalPages
  );
  const active = useSelector((state: RootState) => state.products.active);

  for (let number = 1; number <= totalPages; number++) {
    pages.push(
      <Pagination.Item
        key={number}
        active={number === parseInt(active)}
        onClick={() => {
          navigate("/products/page/" + number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Col className="m-auto" sm={12}>
      <MyPagination>
        <Pagination.Prev
          disabled={parseInt(active) <= 1}
          onClick={() => {
            if (parseInt(active) > 1) {
              navigate("/products/page/" + (parseInt(active) - 1));
            }
          }}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Pagination.Prev>
        {pages}
        <Pagination.Next
          disabled={parseInt(active) >= totalPages}
          onClick={() => {
            if (parseInt(active) < totalPages) {
              navigate("/products/page/" + (parseInt(active) + 1));
            }
          }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Pagination.Next>
      </MyPagination>
    </Col>
  );
};

export default Paginate;
