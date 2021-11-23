import React from 'react'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/userHome/navbar/Navbar'
import UpdateImage from '../../../components/userHome/updateImage/UpdateImage';
import {Container, FormCard } from './UpdateProfileImageElements'

const UpdateProfileImage = () => {
  return (
    <>
      <Container>
        <Navbar />
        <FormCard>
         <UpdateImage />
        </FormCard>
        <Footer />
      </Container>
    </>
  );
};

export default UpdateProfileImage;
