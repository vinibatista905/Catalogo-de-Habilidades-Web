import React from "react";

import Footer from "../../components/footer/Footer";
import Body from "../../components/userHome/body/Body";
import Navbar from "../../components/userHome/navbar/Navbar";
import { HomeContainer } from "./HomeElements";

const Home = () => {
  return (
    <>
    <HomeContainer>
      <Navbar />
      <Body />
      <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;
