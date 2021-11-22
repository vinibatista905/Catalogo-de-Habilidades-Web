import React from "react";
import Navbar from "../../../components/userHome/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { Container, ProfileCard } from "./SpecUserProfilePageElements";
import SpecUserProfile from "../../../components/userHome/specUserProfile/SpecUserProfile";

const SpecUserProfilePage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <ProfileCard>
          <SpecUserProfile />
        </ProfileCard>
        <Footer />
      </Container>
    </>
  );
};

export default SpecUserProfilePage;
