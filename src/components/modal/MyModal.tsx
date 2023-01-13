import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { modalActions } from "../../store/modal-slice";
import Product from "../../models/product";
import { titleCase } from "../../utils/utils";
import { ModalCustom, ModalHeader, ModalTable, ModalTitle } from "./styles";
import { Col, Container, Row } from "react-bootstrap";
import { MyTable } from "../productsTable/styles";

const MyModal: React.FC = () => {
  const item = useSelector((state: RootState) => state.modal.item);
  const { id, name, year, color, pantone_value } = item;

  const dispatch: AppDispatch = useDispatch();

  const show = useSelector((state: RootState) => state.modal.show);

  const closeHandler = () => {
    dispatch(modalActions.handleClose());
  };

  return (
    <ModalCustom show={show} onHide={closeHandler} centered>
      <ModalHeader color={color} closeButton>
        <ModalTitle>{titleCase(name)}</ModalTitle>
      </ModalHeader>
      <Modal.Body>
        <ModalTable>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Year</th>
              <th>Color</th>
              <th>Pantone Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="ID">{id}</td>
              <td data-label="Name">{titleCase(name)}</td>
              <td data-label="Year">{year}</td>
              <td data-label="Color">{color}</td>
              <td data-label="Pantone Value">{pantone_value}</td>
            </tr>
          </tbody>
        </ModalTable>
      </Modal.Body>
    </ModalCustom>
  );
};

export default MyModal;
