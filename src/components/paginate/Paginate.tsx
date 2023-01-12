import { Col, Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { productsActions } from "../../store/products-slice";
import { MyPagination } from "./styles";

const Paginate: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPages = useSelector(
    (state: RootState) => state.products.options.totalPages
  );
  const active = useSelector((state: RootState) => state.products.active);

  let pages = [];
  for (let number = 1; number <= totalPages; number++) {
    pages.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => {
          dispatch(productsActions.changeActive(number));
          navigate("/page/" + number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Col className="m-auto" sm={12} lg={9}>
      <MyPagination>
        <Pagination.Prev
          disabled={active <= 1}
          onClick={() => {
            if (active > 1) {
              dispatch(productsActions.changeActive(active - 1));
              navigate("/page/" + (active - 1));
            }
          }}
        />
        {pages}
        <Pagination.Next
          disabled={active >= totalPages}
          onClick={() => {
            if (active < totalPages) {
              dispatch(productsActions.changeActive(active + 1));
              navigate("/page/" + (active + 1));
            }
          }}
        />
      </MyPagination>
    </Col>
  );
};

export default Paginate;
