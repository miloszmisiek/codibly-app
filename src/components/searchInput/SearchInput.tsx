import {useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { productsActions } from "../../store/products-slice";
import { fetchProductsOptions } from "../../store/products-actions";

const SearchInput: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const active = useSelector((state: RootState) => state.products.active);
  const min = useSelector((state: RootState) => state.products.options.min);
  const max = useSelector((state: RootState) => state.products.options.max);

  const queryInputRef = useRef<HTMLInputElement>(null);
  const { id } = useParams();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = queryInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      navigate("/page/" + active);
      dispatch(productsActions.changeQuery(""));
    } else {
      dispatch(productsActions.changeQuery(enteredText));
      navigate("/id/" + enteredText);
    }
  };

  useEffect(() => {
    if (!id) {
      queryInputRef.current!.value = "";
      dispatch(productsActions.changeQuery(""));
    } else {
      queryInputRef.current!.value = id;
    }
    dispatch(fetchProductsOptions());
  });
  return (
    <>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="search">
          <Form.Label>ID Filter</Form.Label>
          <Form.Control
            type="number"
            min={min}
            max={max}
            placeholder="Enter id number"
            ref={queryInputRef}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default SearchInput;
