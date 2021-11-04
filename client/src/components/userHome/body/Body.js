import React from "react";
import {
  BodyContainer,
  Card,
  CardImg,
  Message,
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
          <Message>O quê você quer fazer hoje?</Message>
        </Section1>
        <Section2>
          <CardImg
            src={require("../../../assets/welcome-1.png").default}
          ></CardImg>
        </Section2>
      </WelcomeCard>

      <OptionCards>
        <Card></Card>

        <Card></Card>

        <Card></Card>

        <Card></Card>
      </OptionCards>
    </BodyContainer>
  );
};

export default Body;
