import { useEffect } from "react";
import { MyTr } from "./styles";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { fetchProductsData } from "../../store/products-actions";

const ProductsTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  
  const products = useSelector((state: RootState) => state.products.items);
  const active = useSelector((state: RootState) => state.products.active);
  const query = useSelector((state: RootState) => state.products.query);
  
  useEffect(() => {
    dispatch(fetchProductsData());
  }, [active, query, dispatch]);

  return (
    <Table bordered>
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
    </Table>
  );
};

export default ProductsTable;
