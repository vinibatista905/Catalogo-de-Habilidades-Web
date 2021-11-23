import styled from "styled-components";
import {
  bgAmarelo,
  bgAzul,
  txBranco,
  txCinza,
  txCinzaEscuro,
} from "../../../components/UI/variaveis";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${txCinza};

  @media only screen and (max-width: 720px) {
    gap: 3rem;
  }
`;

export const FormCard = styled.div`
  width: 80vw;
  height: 75vh;
  margin-bottom: 4.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${txBranco};
  border-radius: 12px;
  border: 1.5px ${bgAmarelo} solid;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    width: 90vw;
    height: auto;
    margin-bottom: 2rem;
  }
`;

export const BannerSection = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${bgAzul};
  border-radius: 12px;

  @media only screen and (max-width: 720px) {
    width: 100%;
    height: 40%;
  }
`;

export const BannerImg = styled.img`
  width: 90%;

  @media only screen and (max-width: 720px) {
    width: 18rem;
  }
`;

export const FormSection = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 720px) {
    width: 100%;
    height: 60%;
  }
`;

export const CardTitle = styled.h2`
  font-size: 2.5rem;
  color: ${txCinzaEscuro};
  margin: 0;
  position: relative;
  bottom: 10rem;

  @media only screen and (max-width: 720px) {
    font-size: 1.5rem;
    position: static;
    text-align: center;
    padding-top: 1.5rem;
  }
`;
