import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import {
  LogoIcon,
  LogoLink,
  LogoTitle,
  LogoutBtn,
  LogoWrap,
  NavContainer,
  UserInfoWrap,
  UserName,
} from "./NavbarElements";
import Dropdown from "./dropdown/Dropdown";

const Navbar = () => {
  const [userInfo, setUserInfo] = useState([]);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    axios.get(`http://localhost:5000/user/info/${userId}`).then(({ data }) => {
      setUserInfo(data);
      // eslint-disable-next-line
    });
  }, []);

  const [profileInfo, setProfileInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/check_profile/${userId}`)
      .then(({ data }) => {
        setProfileInfo(data);
        // eslint-disable-next-line
      });
  }, []);

  const [isOpen, setIsOpen] = useState(false)

  const handleDropdown = () => {

  }


  return (
    <>
      <NavContainer>
        <LogoLink href="/home">
          <LogoWrap>
            <LogoTitle>Skills Cat</LogoTitle>
            <LogoIcon />
          </LogoWrap>
        </LogoLink>
        <UserInfoWrap onClick={() => setIsOpen(!isOpen)}>
          {userInfo?.map((user) => (
            <UserName key={user.id}>{user.name}</UserName>
          ))}

          {profileInfo?.map((profile) => (
            <Image
              key={profile.id}
              className="userImg"
              cloudName="dudmycscb"
              publicId={`https://res.cloudinary.com/dudmycscb/image/upload/v1637432647/${profile.profileImage}.jpg`}
            />
          ))}

        </UserInfoWrap>

        {isOpen && <Dropdown className='dropdown' isOpen={isOpen} setIsOpen={setIsOpen} />}

      </NavContainer>
    </>
  );
};

export default Navbar;
