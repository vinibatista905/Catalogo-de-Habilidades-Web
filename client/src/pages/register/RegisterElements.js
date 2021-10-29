import styled from "styled-components";
import {
  bgAmarelo,
  bgAzul,
  btnAzul,
  btnAzulEscuro,
  txBranco,
} from "../../components/UI/variaveis";

export const RegisterContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 720px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const FormWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin-bottom: 14rem;
`;

export const FormTitle = styled.h1`
  font-size: 3.2rem;

  @media only screen and (max-width: 720px) {
    font-size: 2.5rem;
  }
`;

export const FormSubContainer = styled.div`
  width: 60%;
  margin-top: 1rem;

  @media only screen and (max-width: 720px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const FormFields = styled.div`
  margin-bottom: 1.2rem;
`;

export const FormDesc = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const RegisterBtn = styled.button`
  background: ${btnAzul};
  color: ${txBranco};
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1.1rem;

  :hover {
    background: ${btnAzulEscuro};
    transition: all 0.2s linear;
  }
`;

export const RegisterDesc = styled.p`
  font-size: 1.1rem;
  margin-top: 1rem;
`;

export const LoginLink = styled.a`
  font-weight: 800;
  color: ${bgAmarelo};
  text-decoration: none;

  :hover {
    color: #f88030;
    transition: 0.2s ease-in-out;
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${bgAzul};
  width: 100%;
`;

export const BannerDesc = styled.p`
  color: ${txBranco};
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 1rem;

  @media only screen and (max-width: 720px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
    text-align: center;
  }
`;

export const BannerImg = styled.img`
  width: 25rem;

  @media only screen and (max-width: 720px) {
    width: 14rem;
    margin-bottom: 2rem;
  }
`;
