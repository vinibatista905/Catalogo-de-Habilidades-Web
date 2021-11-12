import React from 'react';
import AdminNavbar from "../../../../components/adminHome/navbar/AdminNavbar";
import UpdateCatalogTable from '../../../../components/adminHome/updateCatalogTable/UpdateCatalogTable';
import Footer from "../../../../components/footer/Footer";
import { Container } from "./SkillsCatalogElements";

const AllSkills = () => {
    return (
        <>
        <Container>
          <AdminNavbar />
          <UpdateCatalogTable />
          <Footer />
        </Container>
      </>
    )
}

export default AllSkills
