import { Alert } from "react-bootstrap";
import styled from "styled-components";

export const AlertCustom = styled(Alert)`
    text-align: center;

    @media screen and (max-width: 576px) {
        margin-top: 1rem;
        font-size: 0.8rem;
    }
`;