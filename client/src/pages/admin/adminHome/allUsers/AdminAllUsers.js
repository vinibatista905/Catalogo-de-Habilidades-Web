import React from "react";
import Navbar from "../../../../components/userHome/navbar/Navbar";
import Footer from "../../../../components/footer/Footer";
import { Container } from "./AdminAllUsersElements";
import UsersTable from "../../../../components/userHome/usersTable/UsersTable";

const AdminAllUsers = () => {
  return (
    <>
      <Container>
        <Navbar />
        <UsersTable />
        <Footer />
      </Container>
    </>
  );
};

export default AdminAllUsers;
