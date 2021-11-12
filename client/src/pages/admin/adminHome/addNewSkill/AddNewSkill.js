import React from "react";
import AdminNavbar from "../../../../components/adminHome/navbar/AdminNavbar";
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
        <AdminNavbar />

        <FormCard>
          <BannerSection>
            <BannerImg
              src={require("../../../../assets/add-skills.png").default}
            />
          </BannerSection>

          <FormSection>
            <CardTitle>
              Adicione uma nova habilidade ao catálogo principal
            </CardTitle>
            <AddNewSkillForm />
          </FormSection>
        </FormCard>

        <Footer />
      </Container>
    </>
  );
};

export default CreateSkill;
