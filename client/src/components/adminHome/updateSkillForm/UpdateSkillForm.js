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
  SkillFormWrap,
} from "./UpdateSkillFormElements";

const UpdateSkillForm = () => {
  
    const skillId = useParams();

  const handleSubmit = async (values) => {
    console.log(values);
    await axios
      .put(`http://localhost:5000/admin/update_new_skill/${skillId.id}`, values)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          alert("Habilidade Atualizada!");
        }
      })
      .catch((err) => {
        alert("Habilidade já atualizada! Por favor adicione outra habilidade.");
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
            <FormBtn type="submit">Atualizar</FormBtn>
            <CheckSkillsLink href="/admin/skills_catalog">
              <button type="button" className="linkBtn">
                Visualizar Catálogo
              </button>
            </CheckSkillsLink>
          </BtnContainer>
        </Form>
      </Formik>
    </SkillFormWrap>
  );
};

export default UpdateSkillForm;
