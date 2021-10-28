import React from "react";
import Header from "./header/Header";
import Footer from "../footer/Footer";
import Hero from "./hero/Hero";
import About from "./about/About";

import { Container, Section1, Section2 } from "./HomepageElements";

const HomePage = () => {
  return (
    <>
    <Container>
      <Section1>
        <Header />
        <Hero />
      </Section1>
      <Section2>
        <About />
      </Section2>
    </Container>
      <Footer />
      </>
  );
};

export default HomePage;
