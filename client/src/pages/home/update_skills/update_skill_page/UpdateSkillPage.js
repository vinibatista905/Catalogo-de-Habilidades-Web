import React from "react";
import Navbar from "../../../../components/userHome/navbar/Navbar";
import UpdateSkillForm from "../../../../components/userHome/updateSkillForm/UpdateSkillForm";
import Footer from "../../../../components/footer/Footer";
import {
  BannerImg,
  BannerSection,
  CardTitle,
  Container,
  FormCard,
  FormSection,
} from "./UpdateSkillPageElements";

const CreateSkill = () => {
  return (
    <>
      <Container>
        <Navbar />

        <FormCard>
          <BannerSection>
            <BannerImg
              src={require("../../../../assets/update-skill.png").default}
            />
          </BannerSection>

          <FormSection>
            <CardTitle>Modifique a habilidade do seu catálogo</CardTitle>
            <UpdateSkillForm />
          </FormSection>
        </FormCard>

        <Footer />
      </Container>
    </>
  );
};

export default CreateSkill;
