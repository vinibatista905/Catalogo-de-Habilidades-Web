import React, { useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../history";

import "./Forgot_Password.css";
import Logo from "../../components/logo/Logo";
import Footer from "../../components/footer/Footer";
import {
  BannerContainer,
  BannerDesc,
  BannerImg,
  ForgotPasswordBtn,
  ForgotPasswordContainer,
  ForgotPasswordDesc,
  FormContainer,
  FormDesc,
  FormFields,
  FormInfo,
  FormSubContainer,
  FormTitle,
  FormWrap,
  LoginLink,
} from "./Forgot_PasswordElements";

const Forgot_Password = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    axios
      .post("http://localhost:5000/user/forgot_password", values)
      .then((resp) => {
        const { data } = resp;
        if (data) {
          history.push("/reset_password");
        }
      }).catch((err) => {
        console.log(err);
        setIsVisible(true);
      })
      
  };
  const validations = yup.object().shape({
    email: yup.string().email("Por favor insira um e-mail válido").required("E-mail é obrigatório"),
  });
  return (
    <>
      <ForgotPasswordContainer>
        <FormContainer>
          <FormWrap>
            <FormTitle>Alterar Senha</FormTitle>
            <FormInfo>
              Insira o seu e-mail e enviaremos um token para alterar a senha.
            </FormInfo>
            <FormSubContainer>
              <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
              >
                <Form>
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

                  <ForgotPasswordBtn
                    onClick={() =>
                      setTimeout(() => {
                        setIsVisible(true);
                      }, 3000)
                    }
                    type="submit"
                  >
                    Enviar
                  </ForgotPasswordBtn>
                  <br />
                  <span className={isVisible ? "error-show" : "error-hidden"}>
                    E-mail não cadastrado
                  </span>
                  <ForgotPasswordDesc>
                    Lembrou da sua senha?
                    <br /> <LoginLink href="/login">Voltar para o login.</LoginLink>
                  </ForgotPasswordDesc>
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
            Verifique seu e-mail para utilizar o token de alteração de senha.
          </BannerDesc>
          <BannerImg
            src={require("../../assets/password.png").default}
          ></BannerImg>
        </BannerContainer>
      </ForgotPasswordContainer>
      <Footer />
    </>
  );
};

export default Forgot_Password;
