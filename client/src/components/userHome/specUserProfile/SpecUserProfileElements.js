import { BsGithub, BsLinkedin } from "react-icons/bs";
import styled from "styled-components";
import {
  btnAmarelo,
  btnAzul,
  btnAzulEscuro,
  txBranco,
  txCinzaEscuro,
  txPreto,
} from "../../UI/variaveis";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
`;

export const ProfileWrap = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  .userImg {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 8px 10px 6px rgba(0, 0, 0, 0.25);

    @media only screen and (max-width: 720px) {
      width: 10rem;
      height: 10rem;
    }
  }
`;

export const UserInfoWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  border-bottom: 1.6px solid rgba(0, 0, 0, 0.2);
  padding: 1rem 0;

  @media only screen and (max-width: 720px) {
    gap: 0;
    justify-content: space-between;
  }
`;

export const UserLinksWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  position: relative;
  top: 0.4rem;

  @media only screen and (max-width: 720px) {
    gap: 1rem;
  }
`;

export const Linkedin = styled(BsLinkedin)`
  font-size: 2rem;
  color: ${txCinzaEscuro};
  transition: ease 0.2s;

  :hover {
    transform: scale(1.3);
    color: ${btnAzul};
  }
  @media only screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

export const Github = styled(BsGithub)`
  font-size: 2rem;
  color: ${txCinzaEscuro};
  transition: ease 0.2s;

  :hover {
    transform: scale(1.3);
    color: ${btnAzul};
  }
  @media only screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

export const ProfileField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .userLink {
    text-decoration: none;
    color: ${btnAzul};
  }
`;

export const Field = styled.h3`
  font-size: 2.2rem;
  color: ${txCinzaEscuro};

  @media only screen and (max-width: 720px) {
    font-size: 1.4rem;
  }
`;

export const UserInfo = styled.h3`
  font-size: 2rem;
  color: ${btnAzul};

  @media only screen and (max-width: 720px) {
    font-size: 1.3rem;
  }
`;

export const UserName = styled.h2`
  width: auto;
  font-size: 3.5rem;
  color: ${txPreto};

  @media only screen and (max-width: 720px) {
    font-size: 1.6rem;
  }
`;

export const LinksWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  gap: 1rem;

  .profile-link {
    text-decoration: none;
    color: ${btnAzul};

    :hover {
      font-weight: bold;
    }
  }
`;

export const Link = styled.p`
  font-size: 1.2rem;

  @media only screen and (max-width: 720px) {
    font-size: 0.9rem;
  }
`;

export const BtnsLinksWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  @media only screen and (max-width: 720px) {
    width: 100%
  }
`;

export const LinkBtn = styled.button`
  width: 7rem;
  height: 3.2rem;
  background: ${btnAzulEscuro};
  color: ${txBranco};
  border: none;
  border-radius: 12px;
  transition: ease 0.5s;
  box-shadow: inset 0 0 0 0 ${btnAzulEscuro};
  outline: none;
  cursor: pointer;

  :hover {
    box-shadow: inset 7rem 0 0 0 ${btnAmarelo};
    font-weight: bold;
    color: ${txPreto};
  }
`;
