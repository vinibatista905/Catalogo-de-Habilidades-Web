import React from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/userHome/navbar/Navbar";
import UpdateProjectCards from "../../../components/userHome/updateProjectCards/UpdateProjectCards";
import { Container } from "./UpdateProjectsElements";

const UpdateProjects = () => {
  return (
    <>
      <Container>
        <Navbar />
        <UpdateProjectCards />
        <Footer />
      </Container>
    </>
  );
};

export default UpdateProjects;
