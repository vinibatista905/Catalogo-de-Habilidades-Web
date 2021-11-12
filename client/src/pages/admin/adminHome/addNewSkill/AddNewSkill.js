import React from "react";
import Navbar from "../../../../components/userHome/navbar/Navbar";
import Footer from "../../../../components/footer/Footer";
import AddNewSkillForm from "../../../../components/adminHome/addNewSkillForm/AddNewSkillForm";
import {
  BannerImg,
  BannerSection,
  CardTitle,
  Container,
  FormCard,
  FormSection,
} from "./AddNewSkillElements";


const CreateSkill = () => {
  return (
    <>
      <Container>
        <Navbar />

        <FormCard>
          <BannerSection>
            <BannerImg
              src={require("../../../../assets/add-skills.png").default}
            />
          </BannerSection>

          <FormSection>
            <CardTitle>Adicione uma nova habilidade ao catálogo principal</CardTitle>
            <AddNewSkillForm />
          </FormSection>
        </FormCard>

        <Footer />
      </Container>
    </>
  );
};

export default CreateSkill;
