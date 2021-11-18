import React from "react";
import AdminNavbar from "../../../../components/adminHome/navbar/AdminNavbar";
import Footer from "../../../../components/footer/Footer";
import UpdateProjectCards from "../../../../components/adminHome/updateProject/UpdateProjectCards";
import { Container } from "./AdminUpdateProjectElements";


const AdminUpdateProjects = () => {
    return (
        <>
        <Container>
        <AdminNavbar />
          <UpdateProjectCards />
          <Footer />
        </Container>
      </>
    )
}

export default AdminUpdateProjects
