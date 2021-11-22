import React from 'react'
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/userHome/navbar/Navbar'
import UpdateProfileForm from '../../../components/userHome/updateProfileForm/UpdateProfileForm';
import { BannerImg, BannerSection, CardTitle, Container, FormCard, FormSection } from './UpdateProfileElements'

const UpdateProfile = () => {
  return (
    <>
      <Container>
        <Navbar />
        <FormCard>
          <BannerSection>
            <BannerImg
              src={require("../../../assets/profile-1.png").default}
            />
          </BannerSection>
          <FormSection>
            <CardTitle>Edite o seu perfil</CardTitle>
            <UpdateProfileForm />
          </FormSection>
        </FormCard>

        <Footer />
      </Container>
    </>
  );
};

export default UpdateProfile;
