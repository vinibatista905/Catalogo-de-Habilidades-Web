import styled from "styled-components";
import { bgAmarelo, bgAzul, bgCinza } from "../../UI/variaveis";

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 80%;
  height: 100%;
  margin: auto;
  gap: 2rem;

  @media only screen and (max-width: 720px) {
    flex-direction: column;
    width: 100%;
    margin: 4rem 0;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 4rem 0
  }
`;

export const AboutCard = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 24rem;
  height: 50vh;
  background: transparent;
  border: 2px ${bgAzul} solid;
  border-radius: 20px;
  box-shadow: 15px 15px 10px rgba(0, 0, 0, 0.251);

  :hover {
    border: 2px ${bgAmarelo} solid;
    background: ${bgCinza};
    transform: scale(1.1);
    transition: all 0.4s ease-in-out;
  }

  @media only screen and (max-width: 720px) {
    width: 16rem;
    height: 60vh;
    margin-bottom: 2rem;
    justify-content: center;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    justify-content: center;
    align-items: center;
  }
`;

export const CardIcon = styled.img`
  width: 4rem;
  margin: 2rem 0;

  @media only screen and (max-width: 720px) {
    width: 3.5rem;
  }
`;

export const CardTitle = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 720px) {
    font-size: 1.2rem;
  }
`;

export const CardDesc = styled.p`
  text-align: center;
  font-size: 1.2rem;

  @media only screen and (max-width: 720px) {
    font-size: 0.9rem;
  }
`;

export const CardBtn = styled.button`
  width: 8rem;
  height: 3rem;
  border-radius: 10px;
  background: ${bgAmarelo};
  border: none;
  transition: ease-out 0.3s;
  box-shadow: inset 0 0 0 0 ${bgAmarelo};
  font-size: 1.2rem;
  outline: none;
  cursor: pointer;
  margin-top: 4rem;

  :hover {
    box-shadow: inset 8rem 0 0 0 #f88030;
  }

  @media only screen and (max-width: 720px) {
    width: 7rem;
    margin-top: 2rem;
   margin-bottom: 1rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-top: 4rem;
    
  }
`;
