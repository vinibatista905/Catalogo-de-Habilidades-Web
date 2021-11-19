import styled from "styled-components";
import { IoLogoOctocat } from "react-icons/io";

export const LogoWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`;

export const LogoName = styled.h1`
  font-size: 4rem;

  @media only screen and (max-width: 720px) {
    font-size: 2.5rem;
  }
`;

export const LogoIcon = styled(IoLogoOctocat)`
  font-size: 4rem;
  margin-left: 0.5rem;

  @media only screen and (max-width: 720px) {
    font-size: 2.5rem;
    margin-left: 0.5rem;
  }
`;
