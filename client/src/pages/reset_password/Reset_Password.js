import React from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../history";
import Logo from "../../components/logo/Logo";
import Footer from "../../components/footer/Footer";
import "./Reset_Password.css";
import {
  ResetPasswordContainer,
  BannerContainer,
  BannerDesc,
  BannerImg,
  BannerLogo,
  FieldContainer,
  FieldWrap,
  FormBtn,
  FormContainer,
  FormDesc,
  FormTitle,
  FormWrap,
} from "./Reset_PasswordElements";

const Reset_Password = () => {
  const handleSubmit = (values) => {
    console.log(values);
    axios
      .post("http://localhost:5000/user/reset_password", values)
      .then((resp) => {
        const { data } = resp;
        if (data) {
          window.alert("Senha alterada com sucesso!");
          setTimeout(() => {
            history.push("/login");
          }, 1000)
          
        }
      });
  };
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    token: yup.string().required(),
    password: yup.string().min(6).required(),
  });
  return (
    <>
      <ResetPasswordContainer>
        <BannerContainer>
          <BannerLogo>
            <Logo />
          </BannerLogo>
          <BannerDesc>Insira a sua nova senha.</BannerDesc>
          <BannerImg
            src={require("../../assets/password-3.png").default}
          ></BannerImg>
        </BannerContainer>

        <FormContainer>
          <FormWrap>
            <FormTitle>Nova Senha</FormTitle>
            <p>Preencha o campo para continuar</p>
            <FieldContainer>
              <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
              >
                <Form className="Login">
                <FieldWrap>
                    <FormDesc>E-mail*</FormDesc>
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
                  </FieldWrap>

                  <FieldWrap>
                    <FormDesc>Token*</FormDesc>
                    <Field
                      name="token"
                      placeholder="Token"
                      className="Login-Field"
                    />
                    <ErrorMessage
                      component="span"
                      name="token"
                      className="Login-Error"
                    />
                  </FieldWrap>

                  <FieldWrap>
                    <FormDesc>Nova Senha*</FormDesc>
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
                  </FieldWrap>
                  

                  <FormBtn type="submit">Enviar</FormBtn>
                </Form>
              </Formik>
            </FieldContainer>
          </FormWrap>
        </FormContainer>
      </ResetPasswordContainer>
      <Footer />
    </>
  );
};

export default Reset_Password;
