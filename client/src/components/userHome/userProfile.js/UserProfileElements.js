import styled from "styled-components";
import { btnAzul, txCinzaEscuro, txPreto } from "../../UI/variaveis";

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
  gap: 1rem;

  .userImg {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 8px 10px 6px rgba(0, 0, 0, 0.25);
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
`;

export const UserInfo = styled.h3`
  font-size: 2rem;
  color: ${btnAzul};
`;

export const UserName = styled.h2`
  width: 100%;
  font-size: 3.5rem;
  color: ${txPreto};
  border-bottom: 1.6px solid rgba(0, 0, 0, 0.2);
  padding: 1rem 0;
  margin-bottom: 2rem;
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
`;
