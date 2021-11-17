import React from "react";
import AdminNavbar from "../../../../components/adminHome/navbar/AdminNavbar";
import UpdateUserTable from "../../../../components/adminHome/updateUserTable/UpdaterUserTable";
import Footer from "../../../../components/footer/Footer";
import { Container } from './UpdateUsersElements';

const UpdateUsers = () => {
  return (
    <>
      <Container>
        <AdminNavbar />
        <UpdateUserTable />
        <Footer />
      </Container>
    </>
  );
};

export default UpdateUsers;
