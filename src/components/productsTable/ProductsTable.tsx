import { ColTable, MyTable, MyTr, SpinnerWrapper } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { modalActions } from "../../store/modal-slice";
import Product from "../../models/product";
import { titleCase } from "../../utils/utils";

import Spinner from "react-bootstrap/Spinner";
import Paginate from "../paginate/Paginate";

const ProductsTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const products = useSelector((state: RootState) => state.products.items);
  const query = useSelector((state: RootState) => state.products.query);
  const loaded = useSelector(
    (state: RootState) => state.products.options.hasLoaded
  );

  const showModalHandler = (item: Product) => {
    dispatch(modalActions.setItem(item));
    dispatch(modalActions.handleShow());
  };

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
                  data-testid="table-row"
                >
                  <td data-label="ID">{item.id}</td>
                  <td data-label="Name">{titleCase(item?.name)}</td>
                  <td data-label="Year">{item.year}</td>
                </MyTr>
              ))}
            </tbody>
          </MyTable>
        ) : (
          <SpinnerWrapper data-testid="spinner">
            <Spinner animation="border" variant="warning" />
          </SpinnerWrapper>
        )}
      </ColTable>
      {loaded && !query && <Paginate />}
    </>
  );
};

export default ProductsTable;
