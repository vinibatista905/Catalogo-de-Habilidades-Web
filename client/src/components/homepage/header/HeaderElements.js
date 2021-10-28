import styled from "styled-components";
import { txBranco, btnAmarelo, txPreto } from "../../UI/variaveis";
import { IoLogoOctocat } from "react-icons/io";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 12vh;
  width: 80%;
  margin: auto;

  @media only screen and (max-width: 720px) {
    width: 100%;
    justify-content: space-evenly;
    margin-bottom: 1rem;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${txBranco};
`;

export const LogoName = styled.h1`
  font-size: 2.5rem;

  @media only screen and (max-width: 720px) {
    font-size: 1.4rem;
  }
`;

export const LogoIcon = styled(IoLogoOctocat)`
  font-size: 2.6rem;
  margin-left: 0.5rem;

  @media only screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  margin-right: 2rem;
  font-size: 1.2rem;
  color: ${txBranco};
  transition: ease-out 0.3s;

  :hover {
    color: ${btnAmarelo};
    margin-bottom: 0.5rem;
    border-bottom: 2px ${btnAmarelo} solid;
  }

  @media only screen and (max-width: 720px) {
    font-size: 0.8rem;
    margin-right: 1rem;
  }
`;

export const HeaderBtn = styled.button`
  width: 8rem;
  height: 2.5rem;
  border-radius: 10px;
  background: transparent;
  border: 2px ${txBranco} solid;
  box-shadow: inset 0 0 0 0 ${btnAmarelo};
  margin-right: 2rem;
  transition: ease-out 0.3s;
  font-size: 1.2rem;
  outline: none;
  color: ${txBranco};
  cursor: pointer;

  :hover {
    box-shadow: inset 8rem 0 0 0 ${btnAmarelo};
    border: 2px ${btnAmarelo} solid;
    color: ${txPreto};
  }

  @media only screen and (max-width: 720px) {
    width: 3rem;
    height: 2rem;
    font-size: 0.8rem;
    margin-right: 0;
  }
`;
