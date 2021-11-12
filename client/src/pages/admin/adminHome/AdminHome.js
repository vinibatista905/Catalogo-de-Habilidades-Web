import React from "react";

import Footer from "../../../components/footer/Footer";
import AdminBody from "../../../components/adminHome/adminBody/AdminBody";
import Navbar from "../../../components/userHome/navbar/Navbar";
import { HomeContainer } from "./AdminHomeElements";

const AdminHome = () => {
  return (
    <>
      <HomeContainer>
        <Navbar />
        <AdminBody />
        <Footer />
      </HomeContainer>
    </>
  );
};

export default AdminHome;
