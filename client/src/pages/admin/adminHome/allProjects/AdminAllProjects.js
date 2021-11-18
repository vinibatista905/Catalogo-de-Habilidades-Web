import React from "react";
import AdminNavbar from "../../../../components/adminHome/navbar/AdminNavbar";
import Footer from "../../../../components/footer/Footer";
import { Container } from "./AdminAllProjectsElements";
import ProjectCards from "../../../../components/adminHome/projectCards/ProjectCards";


const AdminAllProjects = () => {
    return (
        <>
        <Container>
          <AdminNavbar />
          <ProjectCards />
          <Footer />
        </Container>
      </>
    )
}

export default AdminAllProjects
