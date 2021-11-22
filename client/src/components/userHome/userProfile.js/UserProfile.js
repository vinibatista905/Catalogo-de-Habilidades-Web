import axios from "axios";
import React, { useEffect, useState } from "react";
import { Image } from "cloudinary-react";

import {
  Field,
  Link,
  LinksWrap,
  ProfileContainer,
  ProfileField,
  ProfileWrap,
  UserInfo,
  UserName,
} from "./UserProfileElements";

const UserProfile = () => {
  const userId = localStorage.getItem("user_id");

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/user/info/${userId}`).then(({ data }) => {
      setUserInfo(data);
      // eslint-disable-next-line
    });
  }, []);

  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/check_profile/${userId}`)
      .then(({ data }) => {
        setUserProfile(data);
        console.log(data);

        // eslint-disable-next-line
      });
  }, []);

  return (
    <>
      <ProfileContainer>
        {userProfile?.map((profile) => (
          <ProfileWrap>
            <Image
              key={profile.id}
              className="userImg"
              cloudName="dudmycscb"
              publicId={`https://res.cloudinary.com/dudmycscb/image/upload/v1637432647/${profile.profileImage}.jpg`}
            />

            {userInfo?.map((user) => (
              <UserName key={user.id}>{user.name}</UserName>
            ))}

            <ProfileField>
              <Field>Cargo:</Field>
              <UserInfo>{profile.role}</UserInfo>
            </ProfileField>

            <ProfileField>
              <Field>Time:</Field>
              <UserInfo>{profile.team}</UserInfo>
            </ProfileField>

            <ProfileField>
              <Field>Data de Início:</Field>
              <UserInfo>{profile.startDate}</UserInfo>
            </ProfileField>

            <ProfileField>
              <Field>Celular:</Field>
              <UserInfo>{profile.phone}</UserInfo>
            </ProfileField>

            <ProfileField>
              <Field>LinkedIn:</Field>
              <UserInfo><a className="userLink" href={`https://${profile.linkedin}`} target="_blank">{profile.linkedin}</a></UserInfo>
            </ProfileField>

            <ProfileField>
              <Field>Github:</Field>
              <UserInfo><a className="userLink" href={`https://${profile.github}`} target="_blank">{profile.github}</a></UserInfo>
            </ProfileField>
          </ProfileWrap>
        ))}

        <LinksWrap>
        <Link>Ainda não criou o seu perfil? <a className='profile-link' href='/create_profile'>Clique Aqui!</a></Link>
        <Link>Deseja alterar o seu perfil? <a className='profile-link' href='/update_profile'>Clique Aqui!</a></Link>
        </LinksWrap>
      </ProfileContainer>
    </>
  );
};

export default UserProfile;
