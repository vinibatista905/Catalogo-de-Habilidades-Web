import React from "react";
import { Formik, Form, Field } from "formik";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  BtnContainer,
  CheckSkillsLink,
  FieldContainer,
  FieldDesc,
  FieldWrap,
  FormBtn,
  UserFormWrap,
} from "./UpdateUserFormElements";
import { history } from "../../../history";

const UpdateUserForm = () => {
  
    const userId = useParams();

  const handleSubmit = async (values) => {
    console.log(values);
    await axios
      .put(`http://localhost:5000/admin/update_user/${userId.id}`, values)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          alert("Usuário Atualizado!");
          history.push("/admin/update_users")
        }
      })
      .catch((err) => {
        alert("Erro! Por favor tente outra vez.");
      });
  };

  return (
    <UserFormWrap>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        <Form className="form">
          <FieldContainer>
            <FieldWrap>
              <FieldDesc>Nome</FieldDesc>
              <Field name="name" placeholder="Novo nome" className="skillField" />
            </FieldWrap>
            <FieldWrap>
              <FieldDesc>E-mail</FieldDesc>
              <Field
                name="email"
                placeholder="Novo e-mail"
                type="email"
                className="skillField"
              />
            </FieldWrap>
            <FieldWrap>
              <FieldDesc>Senha</FieldDesc>
              <Field
                name="password"
                placeholder="Nova senha"
                type="password"
                className="skillField"
              />
            </FieldWrap>
          </FieldContainer>
          <BtnContainer>
            <FormBtn type="submit">Atualizar</FormBtn>
          </BtnContainer>
        </Form>
      </Formik>
    </UserFormWrap>
  );
};

export default UpdateUserForm;
