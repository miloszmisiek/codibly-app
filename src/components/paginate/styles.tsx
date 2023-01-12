import { Pagination } from "react-bootstrap";
import styled from "styled-components";

export const MyPagination = styled(Pagination)`
  justify-content: flex-end;

  a {
    border: none;
    background-color: transparent;
    color: black;
    &:focus {
      box-shadow: none;
      background-color: transparent;
    }
    &:hover {
      background-color: transparent;
    }
  }
  .active>.page-link {
    background-color: transparent !important;
    border: none !important;
    color: #0d6efd;
    font-weight: 600;
  }

  .page-link {
    border-color: transparent;
    position: relative;
  }

  .active>.page-link::before {
    content: '_';
    display: inline-block;
    position: absolute;
    bottom: -0.1em;
    left: 0;
    text-align: center;
    width: 100%;
}

`;
