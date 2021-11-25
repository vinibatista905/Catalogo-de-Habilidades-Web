import styled from "styled-components";

import { txCinza } from "../../../components/UI/variaveis";

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
