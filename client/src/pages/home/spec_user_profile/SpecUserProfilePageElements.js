import styled from "styled-components";
import { bgAmarelo, txBranco, txCinza } from "../../../components/UI/variaveis";

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

export const ProfileCard = styled.div`
  width: 50rem;
  height: 58rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${txBranco};
  border-radius: 12px;
  border: 2px ${bgAmarelo} solid;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
  margin: 0.9rem 0;

  @media only screen and (max-width: 720px) {
    width: 90vw;
    height: auto;
    padding: 2rem 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 90vw;
    height: auto;
    padding: 2rem 0;
  }
`;
