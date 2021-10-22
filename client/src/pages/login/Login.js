import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../history";
import Logo from "../../components/logo/Logo";
import Footer from "../../components/footer/Footer";
import "./Login.css";

const Login = () => {
  const handleSubmit = (values) => {
    console.log(values);
    axios.post("http://localhost:5000/user/login", values).then((resp) => {
      const { data } = resp;
      if (data) {
        localStorage.setItem("auth-token", data);
        history.push("/home");
      }
    });
  };
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });
  return (
    <>
      <div className="Container-Login">
        
        <div className="Login-banner">
          <div  className='banner-logo'>
          <Logo className='logo' />
          </div>
          <p className="banner-desc">
            Faça login para acessar seu catálogo de habilidades.
          </p>
          <img
            className="banner-img"
            src={require("../../assets/login-2.png").default}
          ></img>
        </div>

        <div className="Login-container">
          <div className="Login-wrap">
            <h1 className="Login-section-title">Login</h1>
            <p>Preencha os campos para continuar</p>
            <div className="Form-container-login">
              <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
              >
                <Form className="Login">
                  <div className="Login-group">
                    <p className="form-desc">E-mail*</p>
                    <Field
                      name="email"
                      placeholder="E-mail"
                      className="Login-Field"
                    />
                    <ErrorMessage
                      component="span"
                      name="email"
                      className="Login-Error"
                    />
                  </div>
                  <div className="Login-group">
                    <p className="form-desc">Senha*</p>
                    <Field
                      name="password"
                      placeholder="Senha"
                      type="password"
                      className="Login-Field"
                    />
                    <ErrorMessage
                      component="span"
                      name="password"
                      className="Login-Error"
                    />
                  </div>
                  <button className="Login-btn" type="submit">
                    Login
                  </button>
                  <p className="register-desc">
                    Ainda não possui uma conta?
                    <br />{" "}
                    <a href="/register" className="Login-span">
                      Registre-se aqui.
                    </a>
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
