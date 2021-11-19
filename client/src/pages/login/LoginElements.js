import styled from "styled-components";
import {
  bgAmarelo,
  bgAzul,
  btnAzul,
  btnAzulEscuro,
  txBranco,
  txPreto,
} from "../../components/UI/variaveis";

export const LoginContainer = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 720px) {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
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

export const BannerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const BannerDesc = styled.div`
  color: ${txBranco};
  font-size: 1.2rem;
  margin-bottom: 1rem;

  @media only screen and (max-width: 720px) {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;

export const BannerImg = styled.img`
  width: 25rem;

  @media only screen and (max-width: 720px) {
    width: 14rem;
    margin-bottom: 2rem;
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
  margin-bottom: 20rem;
`;

export const FormTitle = styled.h1`
  font-size: 3.2rem;

  @media only screen and (max-width: 720px) {
    font-size: 2.5rem;
  }
`;

export const FieldContainer = styled.div`
  width: 60%;
  margin-top: 1rem;

  @media only screen and (max-width: 720px) {
    width: 100%;
  }
  
`;

export const FieldWrap = styled.div`
  margin-bottom: 1.2rem;
`;

export const FormDesc = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const PasswordLink = styled.a`
  font-size: 1.2rem;
  text-decoration: none;
  color: ${btnAzul};
  margin-bottom: 1rem;
  display: block;

  :hover{
    color: ${txPreto};
    transition: all 0.2s linear;
  }
`;

export const FormBtn = styled.button`
  background: ${btnAzul};
  color: ${txBranco};
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1.2rem;

  :hover {
    background: ${btnAzulEscuro};
    transition: all 0.2s linear;
  }
`;

export const RegisterDesc = styled.p`
  font-size: 1.1rem;
  margin-top: 1rem;
`;

export const RegisterLink = styled.a`
  font-size: 1.2rem;
  font-weight: 800;
  color: ${bgAmarelo};
  text-decoration: none;

  :hover {
    color: #f88030;
    transition: 0.2s ease-in-out;
  }
`;
