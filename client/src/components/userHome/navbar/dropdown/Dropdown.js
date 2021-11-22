import React from "react";
import {
  DropdownContainer,
  EditProfileIcon,
  Item,
  ItemWrap1,
  ItemWrap2,
  ItemWrapLogout,
  LogoutIcon,
  ProfileIcon,
} from "./DropdownElements";
import { history } from "../../../../history";

const Dropdown = () => {
  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("admin");
    history.push("/");
  };

  return (
    <DropdownContainer>
      <a className='dropdown-link' href="/profile">
        <ItemWrap1>
          <ProfileIcon />
          <Item>Perfil</Item>
        </ItemWrap1>
      </a>

      <a className='dropdown-link' href="/update_profile">
        <ItemWrap2>
          <EditProfileIcon />
          <Item>Editar Perfil</Item>
        </ItemWrap2>
      </a>

      <ItemWrapLogout className="logout" onClick={logout}>
        <LogoutIcon />
        <Item>Log Out</Item>
      </ItemWrapLogout>
    </DropdownContainer>
  );
};

export default Dropdown;
