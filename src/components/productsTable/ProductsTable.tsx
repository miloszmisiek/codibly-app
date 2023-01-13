import { useEffect } from "react";
import { ColTable, MyTable, MyTr } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchProductsData } from "../../store/products-actions";
import { modalActions } from "../../store/modal-slice";
import Product from "../../models/product";

import { titleCase } from "../../utils/utils";

const ProductsTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const products = useSelector((state: RootState) => state.products.items);
  const active = useSelector((state: RootState) => state.products.active);
  const query = useSelector((state: RootState) => state.products.query);

  const showModalHandler = (item: Product) => {
    dispatch(modalActions.setItem(item));
    dispatch(modalActions.handleShow());
  };

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [active, query, dispatch]);

  return (
    <ColTable className="m-auto" sm={12}>
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
              <td data-label="Name">{titleCase(item.name)}</td>
              <td data-label="Year">{item.year}</td>
            </MyTr>
          ))}
        </tbody>
      </MyTable>
    </ColTable>
  );
};

export default ProductsTable;
