import React from "react";
import Navbar from "../../../components/userHome/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import { BannerImg, BannerSection, CardTitle, Container, FormCard, FormSection } from "./CreateSkillElements";
import SkillForm from "../../../components/userHome/skillForm/SkillForm";

const CreateSkill = () => {
  return (
    <>
      <Container>
        <Navbar />

        <FormCard>
          <BannerSection>
            <BannerImg src={require('../../../assets/add-skills.png').default} />
          </BannerSection>

          <FormSection>
            <CardTitle>Adicione uma habilidade no seu catálogo</CardTitle>
            <SkillForm />
          </FormSection>
        </FormCard>
        
      <Footer />
      </Container>
    </>
  );
};

export default CreateSkill;
