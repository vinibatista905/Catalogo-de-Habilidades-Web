import React from "react";
import AdminNavbar from "../../../../components/adminHome/navbar/AdminNavbar";
import UpdateSkillForm from "../../../../components/adminHome/updateSkillForm/UpdateSkillForm";
import Footer from "../../../../components/footer/Footer";
import {
  BannerImg,
  BannerSection,
  CardTitle,
  Container,
  FormCard,
  FormSection,
} from "./UpdateCatalogElements";

const UpdateCatalog = () => {
  return (
    <>
      <Container>
        <AdminNavbar />
        <FormCard>
          <BannerSection>
            <BannerImg
              src={require("../../../../assets/update-skill.png").default}
            />
          </BannerSection>
          <FormSection>
            <CardTitle>
              Edite a habilidade do catálogo principal
            </CardTitle>
            <UpdateSkillForm />
          </FormSection>
        </FormCard>

        <Footer />
      </Container>
    </>
  );
};

export default UpdateCatalog;
