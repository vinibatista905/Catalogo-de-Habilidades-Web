import React from "react";
import { Redirect, Route } from "react-router";

const AuthRoute = (props) => {
  const isLogged = !localStorage.getItem("auth_token");
  return isLogged ? <Route {...props} /> : <Redirect to="/home" />;
};

export default AuthRoute;
