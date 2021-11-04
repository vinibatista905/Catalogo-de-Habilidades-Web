import styled from "styled-components";
import { bgAmarelo, bgCinza, txBranco, txCinza, txPreto } from "../../UI/variaveis";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const WelcomeCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 60vw;
  height: 45vh;
  background: #dcdfe3;
  border-radius: 15px;
  box-shadow: 8px 12px 20px rgba(0, 0, 0, 0.2);
  margin-top: 4rem;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h2`
  font-size: 3.4rem;
  color: ${txPreto};
  margin: 2rem 0;
`;
export const Message = styled.p`
  font-size: 1rem;
  color: ${txPreto};
`;

export const Section2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImg = styled.img`
  width: 30rem;
  position: relative;
  bottom: 3.5rem;
`;

export const OptionCards = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 95vw;
  height: 45vh;
  margin-bottom: 1rem;
`;

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 20vw;
  height: 32vh;
  background: #dcdfe3;
  transition: ease 0.3s;
  border-radius: 15px;
  box-shadow: 8px 12px 20px rgba(0, 0, 0, 0.2);
  margin: 4rem 0;

  :hover{
    transform: scale(1.1);
    border: 2px ${bgAmarelo} solid;
  }
`;
