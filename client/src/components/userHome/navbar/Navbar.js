import React from "react";
import Logo from "../../logo/Logo";
import { LogoutBtn, NavContainer } from "./NavbarElements";
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
        <Logo />
        <LogoutBtn onClick={logout}>
          <MdOutlineLogout />
          Log Out
        </LogoutBtn>
      </NavContainer>
    </>
  );
};

export default Navbar;
