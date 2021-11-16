import React from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/userHome/navbar/Navbar";
import ProjectCards from "../../../components/userHome/projectCards/ProjectCards";
import { Container } from './AllProjectsElements'


const AllProjects = () => {
  return (
    <>
      <Container>
        <Navbar />
        <ProjectCards />
        <Footer />
      </Container>
    </>
  );
};

export default AllProjects;
