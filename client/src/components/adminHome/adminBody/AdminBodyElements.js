import styled from "styled-components";
import { FaUserEdit, FaEdit, FaUserFriends } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";
import {
  bgAmarelo,
  btnAmarelo,
  btnAzul,
  btnVerde,
  txBranco,
  txCinza,
  txCinzaEscuro,
  txPreto,
  txVermelho,
} from "../../UI/variaveis";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: ${txCinza};
`;

export const WelcomeCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 60vw;
  height: 45vh;
  background: ${txBranco};
  border-radius: 15px;
  box-shadow: 8px 12px 20px rgba(0, 0, 0, 0.22);
  margin-top: 4rem;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
export const Title = styled.h2`
  font-size: 3.4rem;
  color: ${txPreto};
  margin: 2rem 0;
  padding-left: 2rem;
`;

export const User = styled.h2`
  font-size: 3.4rem;
  color: ${txPreto};
  padding-left: 2rem;
`;

export const Message1 = styled.p`
  font-size: 1.2rem;
  color: ${txPreto};
  padding-left: 2rem;
  padding-top: 5rem;
`;

export const Message2 = styled.p`
  font-size: 1.2rem;
  color: ${txPreto};
  padding-top: 12rem;
  padding-left: 2rem;
`;

export const Section2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

export const CardImg = styled.img`
  width: 32rem;
  position: relative;
  bottom: 2.4rem;
`;

export const OptionCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 95vw;
  height: 45vh;
  margin-bottom: 1rem;
`;

export const CardLink = styled.a`
  text-decoration: none;
`;

export const Card1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 32vh;
  background: ${txBranco};
  transition: ease 0.3s;
  border-radius: 15px;
  box-shadow: 8px 12px 20px rgba(0, 0, 0, 0.2);
  margin: 4rem 0;
  color: ${txCinzaEscuro};

  :hover {
    transform: scale(1.1);
    border: 2px ${bgAmarelo} solid;
    color: ${btnAzul};
  }
`;

export const CardIcon1 = styled(MdAddToPhotos)`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const CardDesc = styled.h3`
  font-size: 1.5rem;
  text-align: center;
`;

export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 32vh;
  background: ${txBranco};
  transition: ease 0.3s;
  border-radius: 15px;
  box-shadow: 8px 12px 20px rgba(0, 0, 0, 0.2);
  margin: 4rem 0;
  color: ${txCinzaEscuro};

  :hover {
    transform: scale(1.1);
    border: 2px ${bgAmarelo} solid;
    color: ${btnVerde};
  }
`;

export const CardIcon2 = styled(FaEdit)`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const Card3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 32vh;
  background: ${txBranco};
  transition: ease 0.3s;
  border-radius: 15px;
  box-shadow: 8px 12px 20px rgba(0, 0, 0, 0.2);
  margin: 4rem 0;
  color: ${txCinzaEscuro};

  :hover {
    transform: scale(1.1);
    border: 2px ${bgAmarelo} solid;
    color: ${txVermelho};
  }
`;

export const CardIcon3 = styled(FaUserFriends)`
  font-size: 3rem;
  margin-bottom: 2rem;
`;

export const Card4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 32vh;
  background: ${txBranco};
  transition: ease 0.3s;
  border-radius: 15px;
  box-shadow: 8px 12px 20px rgba(0, 0, 0, 0.2);
  margin: 4rem 0;
  color: ${txCinzaEscuro};

  :hover {
    transform: scale(1.1);
    border: 2px ${bgAmarelo} solid;
    color: ${btnAmarelo};
  }
`;

export const CardIcon4 = styled(FaUserEdit)`
  font-size: 3rem;
  margin-bottom: 2rem;
`;
