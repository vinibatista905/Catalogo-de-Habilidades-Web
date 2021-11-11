import React from 'react'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/userHome/navbar/Navbar'
import UpdateSkillsTable from '../../../components/userHome/updateSkillsTable/UpdateSkillsTable'
import { Container } from './UpdateSkillsElements'

const UpdateSkills = () => {
    return (
        <>
        <Container>
          <Navbar />
         <UpdateSkillsTable />
          <Footer />
        </Container>
      </>
    )
}

export default UpdateSkills
