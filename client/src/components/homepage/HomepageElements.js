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
    /* display: flex;
    flex-direction: column; */
    height: 100vh;
  }
`;

export const Section2 = styled.div`
  height: 75vh;

  @media only screen and (max-width: 720px) {
    /* display: flex;
    flex-direction: column; */
    height: 100vh;
    margin-bottom: auto;
  }
`;
