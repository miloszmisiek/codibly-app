import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import {  useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { productsActions } from "../../store/products-slice";
import { fetchProductsOptions } from "../../store/products-actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  ErrorMessage,
  FormButton,
  FormGroup,
  FormInput,
} from "./styles";
import { Col, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchInput: React.FC = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const min = useSelector((state: RootState) => state.products.options.min);
  const max = useSelector((state: RootState) => state.products.options.max);
  const responseOk = useSelector(
    (state: RootState) => state.products.options.responseOk
  );
  const loaded = useSelector(
    (state: RootState) => state.products.options.hasLoaded
  );

  const formik = useFormik<{ searchFilter: string }>({
    initialValues: {
      searchFilter: "",
    },
    validationSchema: Yup.object({
      searchFilter: Yup.number()
        .max(max, `Must not be more than ${max}`)
        .min(min, `Must not be less than ${min}`),
    }),
    onSubmit: (values): void => {
      const enteredText = values.searchFilter.toString();

      if (enteredText.trim().length === 0) {
        if (id) {
          dispatch(productsActions.notLoaded());
          navigate("/products/page/1");
        }
      } else {
        dispatch(productsActions.notLoaded());
        navigate(`/products/${enteredText}`);
        formik.setFieldValue("searchFilter", "");
 
      }
      formik.setTouched({}, false);
    },
  });

  useEffect(() => {
    dispatch(fetchProductsOptions());
  }, [responseOk, loaded, dispatch]);


  return (
    <>
      <Col className="ms-auto" xs={9} sm={6} md={5} lg={3}>
        {loaded && responseOk && (
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <InputGroup className="mt-4">
                <FormInput
                  type="number"
                  name="searchFilter"
                  placeholder="Enter ID"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.searchFilter}
                  $isError={
                    formik.touched.searchFilter && formik.errors.searchFilter
                  }
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <FormButton
                  variant="outline-secondary"
                  id="button-addon2"
                  type="submit"
                  $isError={
                    formik.touched.searchFilter && formik.errors.searchFilter
                  }
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </FormButton>
              </InputGroup>
              {formik.touched.searchFilter && formik.errors.searchFilter ? (
                <ErrorMessage>{formik.errors.searchFilter}</ErrorMessage>
              ) : null}
            </FormGroup>
          </Form>
        )}
      </Col>
    </>
  );
};

export default SearchInput;
