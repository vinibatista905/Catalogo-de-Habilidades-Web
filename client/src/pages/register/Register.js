import React, { useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../history";

import "./Register.css";
import Logo from "../../components/logo/Logo";
import Footer from "../../components/footer/Footer";
import {
  BannerContainer,
  BannerDesc,
  BannerImg,
  FormContainer,
  FormDesc,
  FormFields,
  FormSubContainer,
  FormTitle,
  FormWrap,
  LoginLink,
  RegisterBtn,
  RegisterContainer,
  RegisterDesc,
} from "./RegisterElements";

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    axios
      .post("http://localhost:5000/user/register", values)
      .then((resp) => {
        const { data } = resp;
        if (data) {
          window.alert("Registrado com sucesso!");
          history.push("/login");
        }
      })
      .catch((err) => {
        alert("Dados inválidos ou já cadastrados. Tente novamente");
        console.log(err);
      });
  };
  const validations = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });
  return (
    <>
      <RegisterContainer>
        <FormContainer>
          <FormWrap>
            <FormTitle>Registre-se</FormTitle>
            <p>Preencha os campos para continuar</p>
            <FormSubContainer>
              <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
              >
                <Form>
                  <FormFields>
                    <FormDesc>Nome*</FormDesc>
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
                  </FormFields>
                  <FormFields>
                    <FormDesc>E-mail*</FormDesc>
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
                  </FormFields>
                  <FormFields>
                    <FormDesc>Senha*</FormDesc>
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
                  </FormFields>
                  <RegisterBtn type="submit">Registrar</RegisterBtn>
                  <br />
                  <span className={isVisible ? "error-show" : "error-hidden"}>
                    Dados inválidos ou já cadastrados
                  </span>
                  <RegisterDesc>
                    Já possui uma conta?
                    <br /> <LoginLink href="/login">Faça login aqui.</LoginLink>
                  </RegisterDesc>
                </Form>
              </Formik>
            </FormSubContainer>
          </FormWrap>
        </FormContainer>

        <BannerContainer>
          <div>
            <Logo className="logo" />
          </div>
          <BannerDesc>
            Cadastre-se e comece agora a criar o seu catálogo de habilidades.
          </BannerDesc>
          <BannerImg
            src={require("../../assets/register-1.png").default}
          ></BannerImg>
        </BannerContainer>
      </RegisterContainer>
      <Footer />
    </>
  );
};

export default Register;
