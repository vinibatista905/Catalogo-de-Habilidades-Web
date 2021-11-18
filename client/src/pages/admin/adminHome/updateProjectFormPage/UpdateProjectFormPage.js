import React from "react";
import AdminNavbar from "../../../../components/adminHome/navbar/AdminNavbar";
import UpdateProjectForm from "../../../../components/adminHome/updateProjectForm/UpdateProjectForm";
import Footer from "../../../../components/footer/Footer";
import {
  BannerImg,
  BannerSection,
  CardTitle,
  Container,
  FormCard,
  FormSection,
} from "./UpdateProjectFormPageElements";

const UpdateProjectFormPage = () => {
  return (
    <>
      <Container>
        <AdminNavbar />

        <FormCard>
          <BannerSection>
            <BannerImg
              src={require("../../../../assets/project-1.png").default}
            />
          </BannerSection>

          <FormSection>
            <CardTitle>
              Edite o projeto do catálogo principal
            </CardTitle>
            <UpdateProjectForm />
          </FormSection>
        </FormCard>

        <Footer />
      </Container>
    </>
  );
};

export default UpdateProjectFormPage;
