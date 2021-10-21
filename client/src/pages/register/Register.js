import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../history";

import "./Register.css";

const Register = () => {
  const handleSubmit = (values) => {
    console.log(values);
    axios.post("http://localhost:5000/user/register", values).then((resp) => {
      const { data } = resp;
      if (data) {
        history.push("/login");
      }
    });
  };
  const validations = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });
  return (
    <>
      <div className="container">
        <h1>Registrar-se</h1>
        <p>Preencha os campos para criar um novo usuário:</p>
        <div className="Form-container">
        <Formik
          initialValues={{}}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <Form className="Register">
            <div className="Register-group">
              <Field
                name="name"
                placeholder="Nome"
                className="Register-Field"
              />
              <ErrorMessage
                component="span"
                name="name"
                className="Register-Error"
              />
            </div>
            <div className="Register-group">
              <Field
                name="email"
                placeholder="E-mail"
                className="Register-Field"
              />
              <ErrorMessage
                component="span"
                name="email"
                className="Register-Error"
              />
            </div>
            <div className="Register-group">
              <Field
                name="password"
                type="password"
                placeholder="Senha"
                className="Register-Field"
              />
              <ErrorMessage
                component="span"
                name="password"
                type="password"
                className="Register-Error"
              />
            </div>
            <button className="Register-btn" type="submit">
              Registrar
            </button>
          </Form>
        </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
