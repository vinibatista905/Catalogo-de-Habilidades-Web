import styled from "styled-components";
import { bgAzul } from "../UI/variaveis";

export const Container = styled.div`
  @media only screen and (max-width: 1024px) {
    width: 90%;
  }

  @media only screen and (max-width: 512px) {
    width: 100%;
  }
`;

export const Section1 = styled.div`
  background-color: ${bgAzul};
  height: 75vh;
`;

export const Section2 = styled.div`
  height: 75vh;
`;
