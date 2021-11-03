import styled from "styled-components";
import { bgAmarelo, bgAzul, bgCinza, txBranco, txPreto } from "../../UI/variaveis";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 10vh;
  background: ${bgAzul};
  padding: 0 1rem;
`;

export const LogoutBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 3rem;
  box-shadow: inset 0 0 0 0 ${txBranco};
  transition: ease 0.3s;
  color: ${txPreto};
  border: none;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    box-shadow: inset 8rem 0 0 0 ${bgAmarelo};
    border: 2px ${bgAmarelo} solid;
  }
`;

