import { Container } from "react-bootstrap";
import styled from "styled-components";

export const MainContainer = styled(Container)`
  background: rgba(247, 247, 249, 1);
  border-radius: 1rem;
  /* height: 336px; */
  /* max-width: 600px; */
  /* min-height: 50vh; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 3rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  @media (min-width: 992px) {
    max-width: 960px !important;
  }

  @media (max-width: 576px) {
    padding: 0 1rem;
  }
`;
