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
`;

export const FormCard = styled.div`
  width: 80rem;
  height: 45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${txBranco};
  border-radius: 12px;
  border: 1.5px ${bgAmarelo} solid;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
`;
