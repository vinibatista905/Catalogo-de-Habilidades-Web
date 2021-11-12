import React from "react";
import { Formik, Form, Field } from "formik";
import axios from "axios";
import {
  BtnContainer,
  CheckSkillsLink,
  FieldContainer,
  FieldDesc,
  FieldWrap,
  FormBtn,
  SkillFormWrap,
} from "./AddNewSkillFormElements";

const AddNewSkillForm = () => {
  const handleSubmit = async (values) => {
    console.log(values);
    await axios
      .post("http://localhost:5000/admin/create_new_skill", values)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          alert("Habilidade Adicionada!");
        }
      })
      .catch((err) => {
        alert("Habilidade já cadastrada! Por favor adicione outra habilidade.");
      });
      
  };

  return (
    <SkillFormWrap>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        <Form className="form">
          <FieldContainer>
          <FieldWrap>
            <FieldDesc>Habilidade</FieldDesc>
            <Field name="name" placeholder="Ex: CSS" className="skillField" />
          </FieldWrap>
          <FieldWrap>
            <FieldDesc>Categoria</FieldDesc>
            <Field
              name="category"
              placeholder="Ex: Front-End"
              type="category"
              className="skillField"
            />
          </FieldWrap>
          </FieldContainer>
          <BtnContainer>
          <FormBtn type="submit">Adicionar</FormBtn>
          <CheckSkillsLink href="/all_skills">
            <button type="button" className="linkBtn">Visualizar Catalogo</button>
          </CheckSkillsLink>
          </BtnContainer>
        </Form>
      </Formik>
    </SkillFormWrap>
  );
};

export default AddNewSkillForm;
