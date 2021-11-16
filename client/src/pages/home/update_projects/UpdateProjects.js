import React from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/userHome/navbar/Navbar";
import { Container } from "./UpdateProjectsElements";

const UpdateProjects = () => {
  return (
    <>
      <Container>
        <Navbar />
        Projetos aqui
        <Footer />
      </Container>
    </>
  );
};

export default UpdateProjects;
