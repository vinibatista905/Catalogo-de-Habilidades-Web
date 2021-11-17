import React from "react";
import AdminNavbar from "../../../../components/adminHome/navbar/AdminNavbar";
import Footer from "../../../../components/footer/Footer";
import UpdateUserForm from "../../../../components/adminHome/updateUserForm/UpdateUserForm";
import {
  BannerImg,
  BannerSection,
  CardTitle,
  Container,
  FormCard,
  FormSection,
} from "./UpdateUserFormElements";

const UpdateUserFormPage = () => {
  return (
    <>
      <Container>
        <AdminNavbar />
        <FormCard>
          <BannerSection>
            <BannerImg
              src={require("../../../../assets/update-user.png").default}
            />
          </BannerSection>
          <FormSection>
            <CardTitle>
              Edite as informações do usuário
            </CardTitle>
            <UpdateUserForm />
          </FormSection>
        </FormCard>

        <Footer />
      </Container>
    </>
  );
};

export default UpdateUserFormPage;
