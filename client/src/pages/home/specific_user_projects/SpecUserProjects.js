import React from 'react'
import Footer from '../../../components/footer/Footer'
import SpecUserProjectCards from '../../../components/userHome/specUserProjectCards/SpecUserProjectCards'
import Navbar from '../../../components/userHome/navbar/Navbar'
import { Container } from './SpecUserProjectElements'

const SpecUserSkills = () => {
    return (
        <>
      <Container>
        <Navbar />
       <SpecUserProjectCards />
        <Footer />
      </Container>
    </>
    )
}

export default SpecUserSkills
