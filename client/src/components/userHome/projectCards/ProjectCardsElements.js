import styled from "styled-components";
import { bgAmarelo, txBranco } from "../../UI/variaveis";

export const CardsContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  gap: 4rem;
`;

export const Card = styled.div`
  width: 30rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${txBranco};
  border-radius: 10px;
  border: 2px ${bgAmarelo} solid;
`;

export const CardImg = styled.img`
  width: 50%;
`;

export const Project = styled.h2`
  font-size: 2.5rem;
`;

export const Manager = styled.p`
  font-size: 1.2rem;

  .span{
      font-weight: bold;
  }
`;

export const Start = styled.p`
  font-size: 1.2rem;

  .span{
      font-weight: bold;
  }
`;

export const End = styled.p`
  font-size: 1.2rem;

  .span{
      font-weight: bold;
  }
`;