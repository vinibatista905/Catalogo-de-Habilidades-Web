import React from 'react'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/userHome/navbar/Navbar'
import SpecUserSkillsTable from '../../../components/userHome/specUserSkillsTable/SpecUserSkillsTable'
import { Container } from './SpecUserSkillsElements'

const SpecUserSkills = () => {
    return (
        <>
      <Container>
        <Navbar />
        <SpecUserSkillsTable />
        <Footer />
      </Container>
    </>
    )
}

export default SpecUserSkills
