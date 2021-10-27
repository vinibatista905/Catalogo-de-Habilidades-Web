import React from "react";
import {
  HeaderBtn,
  HeaderContainer,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
  LogoIcon,
  LogoName,
} from "./HeaderElements";


const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <LogoName>Skills Cat</LogoName>
        <LogoIcon />
      </HeaderLogo>

      <HeaderNav>
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/#about">Sobre</HeaderLink>

        <a href="/login">
          <HeaderBtn>Login</HeaderBtn>
        </a>
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
