import React from "react";
import Navbar from "../../../components/userHome/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { Container, ProfileCard } from "./ProfileElements";
import UserProfile from "../../../components/userHome/userProfile.js/UserProfile";

const Profile = () => {
  return (
    <>
      <Container>
        <Navbar />
        <ProfileCard>
          <UserProfile />
        </ProfileCard>
        <Footer />
      </Container>
    </>
  );
};

export default Profile;
