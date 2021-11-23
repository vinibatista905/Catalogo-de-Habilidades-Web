import styled from "styled-components";
import { ImSpinner2 } from "react-icons/im";
import {
  btnAmarelo,
  btnAzul,
  btnAzulEscuro,
  btnVerde,
  txBranco,
  txCinzaEscuro,
} from "../../UI/variaveis";

export const ProjectFormWrap = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 1rem;

  .formField {
    width: 20rem;
    padding: 0.6rem 0.5rem;
    font-size: 1.2rem;
    border-radius: 12px;
    outline: none;
    border: 2px ${btnAmarelo} solid;
  }

  .form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    gap: 2rem;
  }
`;

export const FieldContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;

  .userImg {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 8px 10px 6px rgba(0, 0, 0, 0.25);
  }
`;

export const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;

  .upload {
    width: 10rem;
    height: 3.4rem;
    margin: 2rem 0;
  }
`;

export const FieldDesc = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${txCinzaEscuro};
  padding-bottom: 1rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
`;

export const FormBtn = styled.button`
  width: 6rem;
  height: 3rem;
  background: ${btnAzul};
  color: ${txBranco};
  border: none;
  border-radius: 12px;
  cursor: pointer;

  :hover {
    background: ${btnAzulEscuro};
    transition: all 0.2s linear;
    color: ${btnAmarelo};
    font-weight: bold;
  }
`;

export const CheckSkillsLink = styled.a`
  text-decoration: none;
`;

export const SubmitBtn = styled.button`
  width: 8.5rem;
  height: 3.4rem;
  font-size: 1.2rem;
  border-radius: 10px;
  background: ${btnAmarelo};
  border: none;
  transition: ease-out 0.3s;
  box-shadow: inset 0 0 0 0 ${btnAmarelo};
  outline: none;
  cursor: pointer;

  :hover {
    box-shadow: inset 8.5rem 0 0 0 #f24b43;
    font-weight: bold;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;
`;

export const LoadingWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  .loaded-on {
    opacity: 1;
    font-size: 1.2rem;
    color: ${btnVerde};
    font-weight: bold;
    padding-bottom: 1rem;
  }

  .loaded-off {
    opacity: 0;
  }
`;

export const LoadingSpinner = styled(ImSpinner2)`
  font-size: 2.5rem;
  color: ${btnAzul};
  animation: Spinner 0.5s infinite ease-in-out;

  @keyframes Spinner {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
