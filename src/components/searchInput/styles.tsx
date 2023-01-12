import { Button, Form } from "react-bootstrap";
import styled from "styled-components";

interface FormInputProps {
  readonly isError: boolean;
}

export const MyForm = styled(Form)`

`;

export const FormGroup = styled(Form.Group)`
  position: relative;
`;
export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  position: absolute;
  bottom: -1.5rem;
  left: 0;
  margin-bottom: 0;
`;

export const FormInput = styled(Form.Control)<FormInputProps>`
  color: ${(props) => (props.$isError ? "red" : "inherit")};
  border-color: ${(props) => (props.$isError ? "red" : "inherit")};
  animation: ${(props) => (props.$isError ? "skew-x-shake 1.3s" : undefined)};

  &:focus {
    outline: none;
    box-shadow: none;
    border-color: ${(props) => (props.$isError ? "red" : "inherit")};
  }
  @keyframes skew-x-shake {
    0% {
      transform: skewX(-15deg);
    }
    5% {
      transform: skewX(15deg);
    }
    10% {
      transform: skewX(-15deg);
    }
    15% {
      transform: skewX(15deg);
    }
    20% {
      transform: skewX(0deg);
    }
    100% {
      transform: skewX(0deg);
    }
  }
`;

export const FormButton = styled(Button)`
  /* margin-top: 2rem; */
`;
