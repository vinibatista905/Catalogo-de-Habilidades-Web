import styled from "styled-components";
import { bgCinzaEscuro, iconAzul, iconAzulEscuro, txAzul } from "../UI/variaveis";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background: ${bgCinzaEscuro};
  width: 100%;
  height: 6vh;
  margin-top: auto;

  @media only screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 12vh;
    padding: 4rem 0;
  }
`;

export const FooterInfo = styled.div`
  color: ${txAzul};

  @media only screen and (max-width: 720px) {
    margin-bottom: 0.8rem;
  }
`;

export const IconsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 10vw;
  gap: 1rem;

  @media only screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 16vw;
  }
`;

export const FooterIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${iconAzulEscuro};
  font-size: 2rem;

  :hover {
    color: ${iconAzul};
    transition: all 0.2s linear;
  }

  @media only screen and (max-width: 720px) {
    margin-left: 0.6rem;
    margin-right: 0.6rem;
  }
`;
