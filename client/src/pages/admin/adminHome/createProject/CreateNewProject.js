import React from "react";
import CreateProjectForm from "../../../../components/adminHome/createProjectForm/CreateProjectForm";
import AdminNavbar from "../../../../components/adminHome/navbar/AdminNavbar";
import Footer from "../../../../components/footer/Footer";
import {
  BannerImg,
  BannerSection,
  CardTitle,
  Container,
  FormCard,
  FormSection,
} from "./CreateNewProjectElements";

const CreateNewProject = () => {
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
              Adicione um novo projeto ao catálogo principal
            </CardTitle>
            <CreateProjectForm />
          </FormSection>
        </FormCard>

        <Footer />
      </Container>
    </>
  );
};

export default CreateNewProject;
