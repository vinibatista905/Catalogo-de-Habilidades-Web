import React from "react";
import { LogoIcon, LogoLink, LogoTitle, LogoutBtn, LogoWrap, NavContainer } from "./NavbarElements";
import { MdOutlineLogout } from "react-icons/md";
import { history } from "../../../history";

const Navbar = () => {
  const logout = () => {
    localStorage.removeItem("auth-token");
    history.push("/");
  };
  return (
    <>
      <NavContainer>
        <LogoLink href="/home">
        <LogoWrap>
          <LogoTitle>Skills Cat</LogoTitle>
          <LogoIcon />
        </LogoWrap>
          </LogoLink>
        <LogoutBtn onClick={logout}>
          <MdOutlineLogout />
          Log Out
        </LogoutBtn>
      </NavContainer>
    </>
  );
};

export default Navbar;
