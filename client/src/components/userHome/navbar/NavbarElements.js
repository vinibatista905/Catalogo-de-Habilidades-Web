import styled from "styled-components";
import { bgAmarelo, bgAzul, txBranco, txPreto } from "../../UI/variaveis";
import { IoLogoOctocat } from "react-icons/io";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  background: ${bgAzul};
  padding: 0 1.4rem;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoLink = styled.a`
  text-decoration: none;
  color: ${txBranco};

  :hover {
    color: ${bgAmarelo};
    transition: ease-in-out 0.3s;
  }
`;

export const LogoTitle = styled.h1`
  font-size: 3rem;
`;

export const LogoIcon = styled(IoLogoOctocat)`
  font-size: 3rem;
  margin-left: 0.5rem;
  margin-top: 0.1rem;
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
