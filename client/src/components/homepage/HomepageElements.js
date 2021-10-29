import styled from "styled-components";
import { bgAzul } from "../UI/variaveis";

export const Container = styled.div`
  @media only screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`;

export const Section1 = styled.div`
  background-color: ${bgAzul};
  height: 75vh;

  @media only screen and (max-width: 720px) {
    height: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    height: 65vh;
  }
`;

export const Section2 = styled.div`
  height: 75vh;

  @media only screen and (max-width: 720px) {
    height: auto;
    margin-bottom: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    width: 100%;
    height: auto;
  }
`;
