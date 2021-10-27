import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  FooterContainer,
  FooterIcon,
  FooterInfo,
  IconsWrap,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfo>
        <small>©Skills Cat 2021</small>
      </FooterInfo>
      <FooterInfo>
        <small>Criado por Vinicius Batista</small>
      </FooterInfo>

      <IconsWrap>
        <FooterIcon
          href="https://www.instagram.com/vinaobatista/"
          target="_blank"
        >
          <AiOutlineInstagram />
        </FooterIcon>
        <FooterIcon
          href="https://www.linkedin.com/in/vinicius-batista-0120016a/"
          target="_blank"
        >
          <AiFillLinkedin />
        </FooterIcon>
        <FooterIcon href="https://github.com/vinibatista905" target="_blank">
          <AiFillGithub />
        </FooterIcon>
        <FooterIcon href="https://twitter.com/v1n1san" target="_blank">
          <AiOutlineTwitter />
        </FooterIcon>
      </IconsWrap>
    </FooterContainer>
  );
};

export default Footer;
