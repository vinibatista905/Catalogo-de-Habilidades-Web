import React from "react";

import {
  AboutCard,
  AboutContainer,
  Card1Btn,
  CardBtn,
  CardDesc,
  CardIcon,
  CardTitle,
  CardWrap,
} from "./AboutElements";

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutCard>
        <CardWrap>
          <CardIcon src={require("../../../assets/dev.png").default} />
          <CardTitle>Desenvolvedores</CardTitle>
          <CardDesc>
            Insira as suas principais habilidades e experiências, e demonstre
            para o seu gestor que você é capacitado para novos desafios!
          </CardDesc>
          <a href="/register">
            <Card1Btn>Começar</Card1Btn>
          </a>
        </CardWrap>
      </AboutCard>

      <AboutCard>
        <CardWrap>
          <CardIcon src={require("../../../assets/manager.png").default} />
          <CardTitle>Gestores</CardTitle>
          <CardDesc>
            Monte e gerencie a sua equipe conforme as habilidades de cada
            integrante.
          </CardDesc>
          <a href="/register">
            <CardBtn>Começar</CardBtn>
          </a>
        </CardWrap>
      </AboutCard>

      <AboutCard>
        <CardWrap>
          <CardIcon src={require("../../../assets/rh.png").default} />
          <CardTitle>Recursos Humanos</CardTitle>
          <CardDesc>
            Acompanhe as habilidades dos colaboradores para planejar
            treinamentos ou cursos.
          </CardDesc>
          <a href="/register">
            <CardBtn>Começar</CardBtn>
          </a>
        </CardWrap>
      </AboutCard>
    </AboutContainer>
  );
};

export default About;
