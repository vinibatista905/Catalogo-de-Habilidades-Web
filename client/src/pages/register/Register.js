import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../history";

import "./Register.css";
import Logo from "../../components/logo/Logo";
import Footer from "../../components/footer/Footer";

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
      <div className="Container-Register">
        
        

        <div className="Register-container">
          <div className="Register-wrap">
            <h1 className="Register-section-title">Registre-se</h1>
            <p>Preencha os campos para continuar</p>
            <div className="Form-container-register">
              <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
              >
                <Form className="Register">
                <div className="Register-group">
                    <p className="form-desc">Nome*</p>
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
                    <p className="form-desc">E-mail*</p>
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
                    <p className="form-desc">Senha*</p>
                    <Field
                      name="password"
                      placeholder="Senha"
                      type="password"
                      className="Register-Field"
                    />
                    <ErrorMessage
                      component="span"
                      name="password"
                      className="Register-Error"
                    />
                  </div>
                  <button className="Register-btn" type="submit">
                    Registrar
                  </button>
                  <p className="register-desc">
                    Já possui uma conta?
                    <br />{" "}
                    <a href="/login" className="Register-span">
                      Faça login aqui.
                    </a>
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
        </div>

        <div className="Register-banner">
          <div  className='banner-logo-register'>
          <Logo className='logo' />
          </div>
          <p className="banner-desc-register">
            Cadastre-se e comece agora a criar o seu catálogo de habilidades.
          </p>
          <img
            className="banner-img"
            src={require("../../assets/register-1.png").default}
          ></img>
        </div>
        
      </div>
      <Footer />
    </>
  );
};

export default Register;
