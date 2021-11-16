import React from "react";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/userHome/navbar/Navbar";
import ProjectForm from "../../../components/userHome/projectForm/ProjectForm";
import {
  BannerImg,
  BannerSection,
  CardTitle,
  Container,
  FormCard,
  FormSection,
} from "./CreateProjectElements";

const CreateProject = () => {
  return (
    <>
      <Container>
        <Navbar />
        <FormCard>
          <BannerSection>
            <BannerImg
              src={require("../../../assets/project-1.png").default}
            />
          </BannerSection>

          <FormSection>
            <CardTitle>Adicione Projetos Que Você Já Participou</CardTitle>
            <ProjectForm />
          </FormSection>
        </FormCard>
        <Footer />
      </Container>
    </>
  );
};

export default CreateProject;
