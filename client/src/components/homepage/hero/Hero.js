import React from "react";
import {
  BtnWrap,
  HeroBtn1,
  HeroBtn2,
  HeroContainer,
  HeroDesc,
  HeroImg,
  HeroSection1,
  HeroSection2,
  HeroTitle,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroSection1>
        <HeroTitle>O Seu Catálogo de Habilidades</HeroTitle>
        <HeroDesc>
          Registre-se em poucos passos e comece agora mesmo a criar o seu
          catálogo de habilidades! Você pode compartilhar o seu e explorar o
          catálogo de outras pessoas. Comece agora mesmo!
        </HeroDesc>
        <BtnWrap>
          <a href="/register">
            <HeroBtn1>Registrar-se</HeroBtn1>
          </a>
          <a href="/login">
            <HeroBtn2>Login</HeroBtn2>
          </a>
        </BtnWrap>
      </HeroSection1>
      <HeroSection2>
        <HeroImg src={require("../../../assets/hero-2.png").default} />
      </HeroSection2>
    </HeroContainer>
  );
};

export default Hero;
