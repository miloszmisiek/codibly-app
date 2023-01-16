import { useEffect } from "react";
import {
  ColTable,
  MyTable,
  MyTr,
  SpinnerWrapper,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchProductsData } from "../../store/products-actions";
import { modalActions } from "../../store/modal-slice";
import Product from "../../models/product";

import { titleCase } from "../../utils/utils";
import Spinner from "react-bootstrap/Spinner";

import Paginate from "../paginate/Paginate";
import { productsActions } from "../../store/products-slice";
import {useNavigate, useParams } from "react-router-dom";
import NotFound from "../notFound/NotFound";

const ProductsTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  let { page, id } = useParams();

  const products = useSelector((state: RootState) => state.products.items);
  const active = useSelector((state: RootState) => state.products.active);
  const query = useSelector((state: RootState) => state.products.query);
  const max = useSelector((state: RootState) => state.products.options.max);
  const min = useSelector((state: RootState) => state.products.options.min);
  const totalPages = useSelector(
    (state: RootState) => state.products.options.totalPages
  );
  const responseOK = useSelector(
    (state: RootState) => state.products.options.responseOk
  );
  const loaded = useSelector(
    (state: RootState) => state.products.options.hasLoaded
  );

  const showModalHandler = (item: Product) => {
    dispatch(modalActions.setItem(item));
    dispatch(modalActions.handleShow());
  };

  useEffect(() => {
    if (page) {
      dispatch(productsActions.changeActive(page));
      dispatch(productsActions.changeQuery(""));
    }
    if(id) {
      dispatch(productsActions.changeQuery(id))
      dispatch(productsActions.changeActive(""));
    }
  }, [dispatch, page, id]);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch, active, query]);

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

  return (
    <>
      <ColTable className="m-auto" sm={12}>
        {loaded ? (
          <MyTable bordered hover responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <MyTr
                  key={item.id}
                  color={item.color}
                  onClick={() => {
                    showModalHandler(item);
                  }}
                >
                  <td data-label="ID">{item.id}</td>
                  <td data-label="Name">{titleCase(item?.name)}</td>
                  <td data-label="Year">{item.year}</td>
                </MyTr>
              ))}
            </tbody>
          </MyTable>
        ) : responseOK ? (
          <SpinnerWrapper>
            <Spinner animation="border" variant="warning" />
          </SpinnerWrapper>
        ) : (
          <NotFound />
        )}
      </ColTable>
      {loaded && !query && <Paginate />}
    </>
  );
};

export default ProductsTable;
