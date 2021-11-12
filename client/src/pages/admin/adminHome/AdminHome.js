import React from "react";

import Footer from "../../../components/footer/Footer";
import AdminBody from "../../../components/adminHome/adminBody/AdminBody";
import AdminNavbar from "../../../components/adminHome/navbar/AdminNavbar";
import { HomeContainer } from "./AdminHomeElements";

const AdminHome = () => {
  return (
    <>
      <HomeContainer>
        <AdminNavbar />
        <AdminBody />
        <Footer />
      </HomeContainer>
    </>
  );
};

export default AdminHome;
