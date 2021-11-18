import React from "react";
import Navbar from "../../../../components/userHome/navbar/Navbar";
import Footer from "../../../../components/footer/Footer";
import { Container } from "./AdminAllProjectsElements";
import ProjectCards from "../../../../components/adminHome/projectCards/ProjectCards";


const AdminAllProjects = () => {
    return (
        <>
        <Container>
          <Navbar />
          <ProjectCards />
          <Footer />
        </Container>
      </>
    )
}

export default AdminAllProjects
