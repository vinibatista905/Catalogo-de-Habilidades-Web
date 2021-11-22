import styled from "styled-components";
import { FaUserAlt, FaUserEdit } from "react-icons/fa";
import {
  bgCinza,
  btnAzul,
  txBranco,
  txCinzaEscuro,
} from "../../../UI/variaveis";
import { MdOutlineLogout } from "react-icons/md";

export const DropdownContainer = styled.div`
  width: 14rem;
  height: 12rem;
  position: absolute;
  top: 7rem;
  right: 3%;
  left: auto;
  display: flex;
  flex-direction: column;
  background: ${txBranco};
  border-radius: 12px;
  box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.2);
  animation: Slide_Up 1s ease;

  @keyframes Slide_Up {
    0% {
      transform: translateY(4rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  ::before {
    content: "";
    position: absolute;
    left: 50%;
    top: -0.5rem;
    background: ${txBranco};
    width: 1rem;
    height: 1rem;
    transform: translateX(-50%) rotate(45deg);
    transition: ease 0.2s;
  }

  :hover::before {
    background: ${bgCinza};
  }
`;

export const ItemWrap1 = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  padding: 0 1.5rem;
  color: ${txCinzaEscuro};
  cursor: pointer;
  border-bottom: 1px outset rgba(0, 0, 0, 0.2);
  transition: ease 0.2s;

  :hover {
    background: ${bgCinza};
    color: ${btnAzul};
    border-radius: 12px 12px 0 0;
  }
`;

export const ItemWrap2 = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  padding: 0 1.5rem;
  color: ${txCinzaEscuro};
  cursor: pointer;
  border-bottom: 1px outset rgba(0, 0, 0, 0.2);
  transition: ease 0.2s;

  :hover {
    background: ${bgCinza};
    color: ${btnAzul};
  }
`;

export const ItemWrapLogout = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  padding: 0 1.5rem;
  color: ${txCinzaEscuro};
  cursor: pointer;
  transition: ease 0.2s;

  :hover {
    background: ${bgCinza};
    color: ${btnAzul};
    border-radius: 0 0 12px 12px;
  }
`;

export const ProfileIcon = styled(FaUserAlt)`
  font-size: 1.2rem;
`;

export const EditProfileIcon = styled(FaUserEdit)`
  font-size: 1.6rem;
`;

export const LogoutIcon = styled(MdOutlineLogout)`
  font-size: 1.6rem;
`;

export const Item = styled.p`
  font-size: 1.2rem;
`;
