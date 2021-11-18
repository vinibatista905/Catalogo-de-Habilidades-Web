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
  ProjectFormWrap,
} from "./CreateProjectFormElements";

const CreateProjectForm = () => {
  const handleSubmit = async (values) => {
    console.log(values);
    await axios
      .post("http://localhost:5000/admin/create_project", values)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          console.log(data);
          alert("Projeto Adicionado!");
        }
      })
      .catch((err) => {
        alert("Projeto já cadastrado! Por favor adicione outro projeto.");
      });
  };

  return (
    <ProjectFormWrap>
      <Formik initialValues={{}} onSubmit={handleSubmit}>
        <Form className="form">
          <FieldContainer>
            <FieldWrap>
              <FieldDesc>Nome do Projeto*</FieldDesc>
              <Field
                name="name"
                placeholder="Ex: Projeto SkillsCat"
                className="formField"
              />
            </FieldWrap>
            <FieldWrap>
              <FieldDesc>Gestor*</FieldDesc>
              <Field
                name="manager"
                placeholder="Ex: Rodrigo Quisen"
                type="text"
                className="formField"
              />
            </FieldWrap>
            <FieldWrap>
              <FieldDesc>Data de Início*</FieldDesc>
              <Field
                name="startDate"
                placeholder="Ex: Front-End"
                type="date"
                
                className="formField"
              />
            </FieldWrap>
            <FieldWrap>
              <FieldDesc>Data de Conclusão*</FieldDesc>
              <Field
                name="conclusionDate"
                placeholder="dd/mm/aaaa"
                type="text"
                title='Em caso de projetos não concluídos, inserir "Em Aberto" '
                className="formField"
              />
            </FieldWrap>

            {/* SKILLS */}

            <FieldWrap>
              <FieldDesc>Skill 1*</FieldDesc>
              <Field
                name="skill1"
                placeholder="Ex: HTML"
                type="text"
                className="formField"
              />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>Skill 2</FieldDesc>
              <Field
                name="skill2"
                placeholder="Ex: CSS"
                type="text"
                className="formField"
              />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>Skill 3</FieldDesc>
              <Field
                name="skill3"
                placeholder="Ex: Javascript"
                type="text"
                className="formField"
              />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>Skill 4</FieldDesc>
              <Field
                name="skill4"
                placeholder="Ex: NodeJS"
                type="text"
                className="formField"
              />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>Skill 5</FieldDesc>
              <Field
                name="skill5"
                placeholder="Ex: MySQL"
                type="text"
                className="formField"
              />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>Skill 6</FieldDesc>
              <Field
                name="skill6"
                placeholder="Ex: Docker"
                type="text"
                className="formField"
              />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>Skill 7</FieldDesc>
              <Field
                name="skill7"
                placeholder="Ex: Git"
                type="text"
                className="formField"
              />
            </FieldWrap>

            <FieldWrap>
              <FieldDesc>Skill 8</FieldDesc>
              <Field
                name="skill8"
                placeholder="Ex: Github"
                type="text"
                className="formField"
              />
            </FieldWrap>
          </FieldContainer>
          <BtnContainer>
            <FormBtn type="submit">Adicionar</FormBtn>
            <CheckSkillsLink href="/admin/all_projects">
              <button type="button" className="linkBtn">
                Visualizar Projetos
              </button>
            </CheckSkillsLink>
          </BtnContainer>
        </Form>
      </Formik>
    </ProjectFormWrap>
  );
};

export default CreateProjectForm;
