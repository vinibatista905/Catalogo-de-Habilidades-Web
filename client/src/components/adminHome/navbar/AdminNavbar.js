import React, { useEffect, useState } from "react";
import axios from "axios";
import { LogoIcon, LogoLink, LogoTitle, LogoutBtn, LogoWrap, NavContainer, UserInfoWrap, UserName } from "./AdminNavbarElements";
import { MdOutlineLogout } from "react-icons/md";
import { history } from "../../../history";

const Navbar = () => {

  const [userInfo, setUserInfo] = useState([]);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    axios.get(`http://localhost:5000/user/info/${userId}`).then(({ data }) => {
      setUserInfo(data);
      // eslint-disable-next-line
    });
  }, []);

  const logout = () => {
    localStorage.removeItem("auth-token");
    history.push("/");
  };
  return (
    <>
      <NavContainer>
        <LogoLink href="/admin/home">
        <LogoWrap>
          <LogoTitle>Skills Cat</LogoTitle>
          <LogoIcon />
        </LogoWrap>
          </LogoLink>
          <UserInfoWrap>
          {userInfo?.map((user) => (
            <UserName key={user.id}>{user.name}</UserName>
          ))}
        <LogoutBtn onClick={logout}>
          <MdOutlineLogout />
          Log Out
        </LogoutBtn>
          </UserInfoWrap>
      </NavContainer>
    </>
  );
};

export default Navbar;
