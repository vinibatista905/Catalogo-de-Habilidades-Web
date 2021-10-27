import styled from "styled-components";
import { btnAmarelo, txBranco, txCinza, txPreto } from "../../UI/variaveis";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: auto;
`;

export const HeroSection1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
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
`;

export const HeroDesc = styled.p`
  color: ${txCinza};
  font-size: 1.2rem;
  text-align: start;
`;

export const BtnWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin-top: 2.5rem;
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
`;

export const HeroImg = styled.img`
  width: 35rem;
`;
