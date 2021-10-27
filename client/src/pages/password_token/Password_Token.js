import React, { useState } from "react";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { history } from "../../history";

import "./Password-Token.css";
import Logo from "../../components/logo/Logo";
import Footer from "../../components/footer/Footer";
import {
  BannerContainer,
  BannerDesc,
  BannerImg,
  ForgotPasswordBtn,
  ForgotPasswordContainer,
  FormContainer,
  FormDesc,
  FormFields,
  FormInfo,
  FormSubContainer,
  FormTitle,
  FormWrap,
} from "./Password_TokenElements";

const Password_Token = () => {
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
      });
  };
  const validations = yup.object().shape({
    token: yup.string().required(),
  });
  return (
    <>
      <ForgotPasswordContainer>
        <FormContainer>
          <FormWrap>
            <FormTitle>Token</FormTitle>
            <FormInfo>Insira o token que enviamos para o seu e-mail.</FormInfo>
            <FormSubContainer>
              <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
              >
                <Form>
                  <FormFields>
                    <FormDesc>Token*</FormDesc>
                    <Field
                      name="token"
                      placeholder="Token"
                      className="Register-Field"
                    />
                    <ErrorMessage
                      component="span"
                      name="token"
                      className="Register-Error"
                    />
                  </FormFields>

                  <ForgotPasswordBtn
                    onClick={() =>
                      setTimeout(() => {
                        setIsVisible(true);
                      }, 1000)
                    }
                    type="submit"
                  >
                    Enviar
                  </ForgotPasswordBtn>
                  <br />
                  <span className={isVisible ? "error-show" : "error-hidden"}>
                    Token inválido
                  </span>
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
            Insira o token de alteração de senha que você recebeu no seu e-mail.
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

export default Password_Token;
