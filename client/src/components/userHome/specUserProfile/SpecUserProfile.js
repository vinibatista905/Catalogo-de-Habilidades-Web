import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Image } from "cloudinary-react";

import {
  BtnsLinksWrap,
  Field,
  Github,
  Link,
  LinkBtn,
  Linkedin,
  LinksWrap,
  ProfileContainer,
  ProfileField,
  ProfileWrap,
  UserInfo,
  UserInfoWrap,
  UserLinksWrap,
  UserName,
} from "./SpecUserProfileElements";


const SpecUserProfile = () => {
  const userId = useParams();

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/info/${userId.id}`)
      .then(({ data }) => {
        setUserInfo(data);
        // eslint-disable-next-line
      });
  }, []);

  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/check_profile/${userId.id}`)
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

            <UserInfoWrap>
              {userInfo?.map((user) => (
                <UserName key={user.id}>{user.name}</UserName>
              ))}
              <UserLinksWrap>
                <a className='iconLink' href={profile.linkedin} target='_blank'><Linkedin /></a>
                <a className='iconLink' href={profile.github} target='_blank'><Github /></a>
              </UserLinksWrap>
            </UserInfoWrap>

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

           <BtnsLinksWrap>
               <a href={"/users/" + profile.idUser}><LinkBtn>Ver Skills</LinkBtn></a>
               <a href={"/users/projects/" + profile.idUser}><LinkBtn>Ver Projetos</LinkBtn></a>
           </BtnsLinksWrap>

          </ProfileWrap>
        ))}

        <LinksWrap>
        {userProfile.length === 0 ? <span className='profile-message'>Que pena! O usuário ainda não possui perfil.</span> : null} 
          <Link>
            Ainda não criou o seu perfil? 
            <a className="profile-link" href="/create_profile">
              Clique Aqui!
            </a>
          </Link>
        </LinksWrap>
      </ProfileContainer>
    </>
  );
};

export default SpecUserProfile;
