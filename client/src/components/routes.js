import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Forgot_Password from "../pages/forgot_password/Forgot_Password";
import Home from "../pages/home/Home";
import Homepage from "../pages/homepage/Homepage";
import NotFound from "./notFound/NotFound";
import PrivateRoute from './PrivateRoute'

import { history } from "../history";


const Routes = () => (
    
  <Router history={history}>
    <Switch>
      <Route component={Login} exact path="/login" />
      <Route component={Register} exact path="/register" />
      <Route component={Forgot_Password} exact path="/forgot_password" />
      <Route component={Homepage} exact path="/" />
      <PrivateRoute component={Home} exact path="/home" />
      <PrivateRoute component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
