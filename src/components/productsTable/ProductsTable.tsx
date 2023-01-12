import { useEffect } from "react";
import { MyTable, MyTr } from "./styles";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchProductsData } from "../../store/products-actions";
import { Col } from "react-bootstrap";

const ProductsTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const products = useSelector((state: RootState) => state.products.items);
  const active = useSelector((state: RootState) => state.products.active);
  const query = useSelector((state: RootState) => state.products.query);

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [active, query, dispatch]);

  return (
    <Col className="m-auto" sm={12} lg={9}>
      <MyTable bordered responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <MyTr key={item.id} color={item.color}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.year}</td>
            </MyTr>
          ))}
        </tbody>
      </MyTable>
    </Col>
  );
};

export default ProductsTable;
