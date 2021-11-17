import React from "react";
import { Redirect, Route } from "react-router";

const AdminPrivateRoute = (props) => {
  const isLogged = !!localStorage.getItem("admin");
  return isLogged ? <Route {...props} /> : <Redirect to="/admin/login" />;
};

export default AdminPrivateRoute;
