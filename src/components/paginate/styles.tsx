import { Pagination } from "react-bootstrap";
import styled from "styled-components";

export const MyPagination = styled(Pagination)`
  justify-content: flex-end;
  margin-left: auto;

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
      color: hsl(24 100% 65%);
    }
    span {
      font-size: 0.9rem;
    }
  }
  .active > .page-link {
    background-color: transparent !important;
    border: none !important;
    color: hsl(24 100% 65%);
    font-weight: 600;
  }

  .page-link {
    border-color: transparent;
    position: relative;
  }
  .page-item {
    margin: auto 0;
  }

  .active > .page-link::before {
    content: "_";
    display: inline-block;
    position: absolute;
    bottom: -0.1em;
    left: 0;
    text-align: center;
    width: 100%;
  }

  .disabled > .page-link {
    color: transparent !important;
    background-color: transparent;
  }

  @media screen and (max-width: 576px) {
    justify-content: center;
    margin: 0 auto 2rem;
  }
`;
