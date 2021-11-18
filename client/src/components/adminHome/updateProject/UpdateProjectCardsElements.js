import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import {
  bgAmarelo,
  btnAzul,
  btnVerde,
  txBranco,
  txCinzaEscuro,
  txVermelho,
} from "../../UI/variaveis";

export const CardsContainer = styled.div`
  width: 95vw;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 30rem;
  height: 44rem;
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

  :hover {
    transform: scale(1.1);

    .icons {
      opacity: 1;
    }
  }
`;

export const CardImg = styled.img`
  width: 62%;
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
`;

export const IconsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 1rem 0;
  margin-top: auto;
  opacity: 0;
  transition: ease 0.4s;
`;

export const EditIcon = styled(FiEdit)`
  font-size: 2.5rem;
  color: ${btnVerde};
  transition: ease 0.3s;

  :hover {
    transform: scale(1.4);
  }
`;

export const DeleteIcon = styled(MdDeleteForever)`
  font-size: 2.8rem;
  color: ${txVermelho};
  cursor: pointer;
  transition: ease 0.3s;

  :hover {
    transform: scale(1.4);
  }

  :hover ~ .card {
    transform: scale(1.4);
  }
`;
