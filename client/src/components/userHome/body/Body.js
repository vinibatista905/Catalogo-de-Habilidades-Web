import React from "react";
import {
  BodyContainer,
  Card1,
  Card2,
  Card3,
  Card4,
  CardDesc,
  CardIcon1,
  CardIcon2,
  CardIcon3,
  CardIcon4,
  CardImg,
  CardLink,
  Message1,
  Message2,
  OptionCards,
  Section1,
  Section2,
  Title,
  WelcomeCard,
} from "./BodyElements";

const Body = () => {
  return (
    <BodyContainer>
      <WelcomeCard>
        <Section1>
          <Title>Olá Fulano(a)!</Title>
          <Message1>O que você quer fazer hoje?</Message1>
          <Message2>Veja abaixo algumas opções:</Message2>
        </Section1>
        <Section2>
          <CardImg
            src={require("../../../assets/welcome-1.png").default}
          ></CardImg>
        </Section2>
      </WelcomeCard>

      <OptionCards>
        <CardLink href="/">
          <Card1>
            <CardIcon1></CardIcon1>
            <CardDesc>Adicionar Habilidades</CardDesc>
          </Card1>
        </CardLink>

        <CardLink href="/">
          <Card2>
            <CardIcon2></CardIcon2>
            <CardDesc>Ver Suas Habilidades</CardDesc>
          </Card2>
        </CardLink>

        <CardLink href="/">
          <Card3>
            <CardIcon3></CardIcon3>
            <CardDesc>Editar Suas Habilidades</CardDesc>
          </Card3>
        </CardLink>

        <CardLink href="/">
          <Card4>
            <CardIcon4></CardIcon4>
            <CardDesc>Ver Outros Usuários</CardDesc>
          </Card4>
        </CardLink>
      </OptionCards>
    </BodyContainer>
  );
};

export default Body;
