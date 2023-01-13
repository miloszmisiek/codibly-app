import { Modal } from "react-bootstrap";
import styled from "styled-components";

export const ModalCustom = styled(Modal)`
  /* @media (max-width: 576px) {
    .modal-dialog {
      display: flex;
      align-items: center;
      min-height: calc(100% - 0.5rem * 2);
    }
  } */
`;

export const ModalHeader = styled(Modal.Header)`
  background-color: ${(props) => props.color} !important;
`;
export const ModalTitle = styled(Modal.Title)`
  font-family: "Dosis", sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 700;
`;

export const ModalTable = styled.table`
  border: 0;
  width: 100%;
  caption {
    font-size: 1.3em;
  }
  thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    color: black !important;
  }
  tr {
    border: 1px solid transparent;
    outline: none;
    display: block;
    td {
      position: relative;
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
      padding: 0.5rem 0.5rem;
    }
    td::before {
      /* font-family: "Special Elite", cursive; */
      position: absolute;
      left: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      content: attr(data-label);
      font-weight: bold;
      text-transform: uppercase;
    }
    td:last-child {
      border-bottom: 0;
    }
  }
`;
