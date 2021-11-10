import React from 'react';
import Navbar from "../../../components/userHome/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { Container } from "./AllSkillsElements";
import UserSkillsTable from '../../../components/userHome/userSkillsTable/UserSkillsTable';

const AllSkills = () => {
    return (
        <>
        <Container>
          <Navbar />
         <UserSkillsTable />
          <Footer />
        </Container>
      </>
    )
}

export default AllSkills
