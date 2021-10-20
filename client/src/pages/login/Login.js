import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from 'axios';
import { history } from '../../history';

import './Login.css';

const Login = () => {
  const handleSubmit = (values) => { console.log(values)
    axios.post('http://localhost:5000/user/login', values)
    .then(resp => {
      const { data } = resp
      if (data) {
        localStorage.setItem('auth-token', data)
        history.push('/home')
      }
    })
  }
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });
  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <p>Preencha os campos para continuar</p>
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className="Login">
            <div className="Login-group">
              <Field name="email" className="Login-Field" />
              <ErrorMessage
                component="span"
                name="email"
                className="Login-Error"
              />
            </div>
            <div className="Login-group">
              <Field name="password" className="Login-Field" />
              <ErrorMessage
                component="span"
                name="password"
                className="Login-Error"
              />
            </div>
            <button className="Login-btn" type="submit">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
