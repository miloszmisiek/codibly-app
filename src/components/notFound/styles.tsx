import { Col } from "react-bootstrap";
import styled from "styled-components";

export const ColNF = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  h1 {
    margin: 0;
    font-weight: 800;
    font-size: 4rem;
    color: hsl(24 100% 65%);
  }

  h2 {
    color: #dc3545;
    margin: 0;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
  }

  p {
    margin: 0;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.1rem;
    text-align: center;
  }
`;

export const ButtonBackHome = styled.button`
  margin-top: 1rem;
  align-items: center;
  background-color: hsl(24 100% 65%);
  border: 0;
  border-radius: 100px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 0px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
    color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;

  &:hover,
  &:focus {
    background-color: hsl(24 100% 55%);
    color: #ffffff;
  }

  &:active {
    background: #09223b;
    color: rgb(255, 255, 255, 0.7);
  }

  &:disabled {
    cursor: not-allowed;
    background: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const OverlayImage = styled.img`
  width: 100%;
  opacity: 0.6;
  position: absolute;
  z-index: -1;
  height: 100%;
  border-radius: 1rem;
`;

export const NotFoundMsg = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const WrongMessage = styled.p`
  font-family: "Caveat", cursive;
  margin: 1rem auto;
  font-size: 2rem !important;

  @media screen and (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;
