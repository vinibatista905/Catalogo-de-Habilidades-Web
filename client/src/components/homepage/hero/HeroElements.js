import styled from "styled-components";
import { btnAmarelo, txBranco, txCinza, txPreto } from "../../UI/variaveis";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;

  @media only screen and (max-width: 720px) {
    width: 100%;
    flex-direction: column;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 90%;

    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const HeroSection1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;

  @media only screen and (max-width: 720px) {
    width: 80vw;
  }
`;

export const HeroSection2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
`;

export const HeroTitle = styled.h2`
  color: ${txBranco};
  font-size: 4rem;
  text-align: start;
  margin-bottom: 2rem;

  @media only screen and (max-width: 720px) {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.2rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 2.6rem;
  }
`;

export const HeroDesc = styled.p`
  color: ${txCinza};
  font-size: 1.2rem;
  text-align: start;

  @media only screen and (max-width: 720px) {
    font-size: 1rem;
    text-align: center;
  }
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 2.5rem;

  @media only screen and (max-width: 720px) {
    justify-content: space-evenly;
    margin-bottom: 0.8rem;
  }
`;

export const HeroBtn1 = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 10px;
  background: ${btnAmarelo};
  border: none;
  transition: ease-out 0.3s;
  box-shadow: inset 0 0 0 0 ${btnAmarelo};
  font-size: 1.2rem;
  outline: none;
  margin-right: 2rem;
  cursor: pointer;

  :hover {
    box-shadow: inset 8rem 0 0 0 #f24b43;
  }

  @media only screen and (max-width: 720px) {
    margin-right: 0;
  }
`;

export const HeroBtn2 = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 10px;
  background: transparent;
  border: 2px ${txBranco} solid;
  box-shadow: inset 0 0 0 0 #f24b43;
  margin-right: 2rem;
  transition: ease-out 0.3s;
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
  color: ${txBranco};

  :hover {
    box-shadow: inset 8rem 0 0 0 #f24b43;
    border: 2px #f24b43 solid;
    color: ${txPreto};
  }

  @media only screen and (max-width: 720px) {
    margin-right: 0;
  }
`;

export const HeroImg = styled.img`
  width: 35rem;
  margin-left: 8rem;

  @media only screen and (max-width: 720px) {
    width: 20rem;
    margin-bottom: 1rem;
    margin-left: 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 22rem;
    margin-bottom: 1rem;
    margin-left: 0;
  }
`;
