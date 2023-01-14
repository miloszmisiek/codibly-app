import { Button, Form, InputGroup } from "react-bootstrap";
import styled from "styled-components";

interface FormInputProps {
  readonly isError: boolean;
}

export const MyForm = styled(Form)``;

export const FormGroup = styled(InputGroup)`
  @media (max-width: 576px) {
    max-width: 180px;
    margin-left: auto;
  }
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

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
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

export const FormButton = styled(Button)<FormInputProps>`
  border-color: ${(props) => (props.$isError ? "red" : "inherit")};
  animation: ${(props) => (props.$isError ? "skew-x-shake 1.3s" : undefined)};
`;

export const HomeButton = styled(Button)`
  background-color: hsl(24 100% 65%);
  border: none;
  margin-top: 1.5rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  &:hover {
    background-color: hsl(24 100% 55%);
  }
`;
