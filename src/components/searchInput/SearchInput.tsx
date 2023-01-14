import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import {
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
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
  HomeButton,
} from "./styles";
import { Button, Col, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchInput: React.FC = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const match = useMatch("/page/1");
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
          navigate("/page/1");
          dispatch(productsActions.changeActive(1));
          dispatch(productsActions.changeQuery(""));
        }
      } else {
        dispatch(productsActions.notLoaded());
        dispatch(productsActions.changeQuery(enteredText));
      }
      formik.setTouched({}, false);
    },
  });

  useEffect(() => {
    responseOk && dispatch(fetchProductsOptions());
  }, [responseOk, loaded]);

  useEffect(() => {
    if (!!!id) {
      formik.values.searchFilter = "";
      dispatch(productsActions.changeQuery(""));
      formik.setTouched({}, false);
    } else {
      formik.values.searchFilter = id;
    }
  }, [id]);

  return (
    <>
      <Col className="me-auto" xs={3} sm={6} md={5} lg={3}>
        <HomeButton
          onClick={() => {
            if (!match) {
              dispatch(productsActions.changeActive(1));
              navigate("/");
            }
          }}
        >
          <FontAwesomeIcon icon={faHome} />
        </HomeButton>
      </Col>
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
