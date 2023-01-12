import styled from "styled-components";
import Table from "react-bootstrap/Table";

export const MyTable = styled(Table)`
  margin-top: 2rem;

  thead {
    color: #fff;
    background-color: #212529;
    
  }
`;

export const MyTr = styled.tr`
  background-color: ${(props) => props.color} !important;
`;
