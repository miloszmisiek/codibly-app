import styled from "styled-components";
import Table from "react-bootstrap/Table";
import { Col } from "react-bootstrap";

export const ColTable = styled(Col)`
  .table-responsive {
    min-height: 295px;
  }
`;

export const MyTable = styled(Table)`
  margin-top: 2rem;
  text-align: center;

  thead {
    color: #fff;
    background-color: #212529;
    text-transform: uppercase;
    font-family: "Dosis", sans-serif;
    letter-spacing: 3px;
  }

  @media (max-width: 576px) {
    .table > :not(caption) > * > * {
      border-bottom-width: 1px;
      padding-left: 90px;
    }
    border: 0;
    margin: 2rem auto;
    max-width: 80%;
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
      margin-bottom: 1.625em;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
        rgba(0, 0, 0, 0.23) 0px 3px 6px;
    }
    td {
      position: relative;
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
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

export const MyTr = styled.tr`
  background-color: ${(props) => props.color} !important;
  cursor: pointer;
`;
