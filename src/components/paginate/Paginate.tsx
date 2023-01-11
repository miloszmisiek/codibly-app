import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import { productsActions } from "../../store/products-slice";

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
    <Pagination size="sm">
      <Pagination.Prev
        onClick={() => {
          if (active > 1) {
            dispatch(productsActions.changeActive(active - 1));
            navigate("/page/" + (active - 1));
          }
        }}
      />
      {pages}
      <Pagination.Next
        onClick={() => {
          if (active < 5) {
            dispatch(productsActions.changeActive(active + 1));
            navigate("/page/" + (active + 1));
          }
        }}
      />
    </Pagination>
  );
};

export default Paginate;
