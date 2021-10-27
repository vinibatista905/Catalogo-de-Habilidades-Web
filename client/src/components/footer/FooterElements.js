import styled from "styled-components";
import { iconAzul, iconAzulEscuro, txAzul } from "../UI/variaveis";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  background: var(--gray-bg-color);
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

  @media only screen and (max-width: 720px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20vw;
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
