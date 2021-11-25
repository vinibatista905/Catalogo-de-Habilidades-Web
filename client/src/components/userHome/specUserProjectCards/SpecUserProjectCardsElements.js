import styled from "styled-components";
import {
  bgAmarelo,
  btnAzul,
  txBranco,
  txCinzaEscuro,
  txPreto,
} from "../../../components/UI/variaveis";

export const CardsContainer = styled.div`
  width: 95vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;
`;

export const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserInfo = styled.h2`
  font-size: 2.8rem;
  color: ${txCinzaEscuro};

  @media only screen and (max-width: 720px) {
    font-size: 1.6rem;
    text-align: center;
  }

  .user {
    color: ${btnAzul};
  }
`;

export const CardsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 30rem;
  height: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  background: ${txBranco};
  border-radius: 12px;
  border: 2px ${bgAmarelo} solid;
  padding: 0 0.6rem;
  transition: ease 0.3s;
  box-shadow: 10px 10px 10px 6px rgba(0, 0, 0, 0.2);
  position: relative;

  @media only screen and (max-width: 720px) {
    width: 85%;
    height: auto;
    padding: 1rem;
  }

  :hover {
    transform: scale(1.1);
    border: 2px ${btnAzul} solid;

    .tag {
      background: ${bgAmarelo};
      color: ${txPreto};
      font-weight: bold;
    }
    .image1{
      opacity: 0;
    }
    
    .image2{
      opacity: 1;
    }
  }
`;

export const CardImg1 = styled.img`
  width: 62%;
  position: relative;
  transition: ease 0.25s;

`;

export const CardImg2 = styled.img`
  width: 62%;
  position: absolute;
  opacity: 0;
  transition: ease 0.25s;

`;

export const Project = styled.h2`
  font-size: 2.5rem;
  color: ${txCinzaEscuro};
  text-align: start;
`;

export const Manager = styled.p`
  font-size: 1.2rem;

  .span {
    font-weight: bold;
    color: ${txCinzaEscuro};
  }
`;

export const Start = styled.p`
  font-size: 1.2rem;

  .span {
    font-weight: bold;
    color: ${txCinzaEscuro};
  }
`;

export const End = styled.p`
  font-size: 1.2rem;

  .span {
    font-weight: bold;
    color: ${txCinzaEscuro};
  }
`;

export const ProjectSkills = styled.div`
  .span {
    font-size: 1.2rem;
    font-weight: bold;
    color: ${txCinzaEscuro};
  }
`;

export const SkillTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: ${txBranco};
  background: ${btnAzul};
  border-radius: 0.5rem;
  width: 6.2rem;
  height: 2.5rem;
  transition: ease 0.3s;
`;
