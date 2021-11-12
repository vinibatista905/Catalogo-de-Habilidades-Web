import React from 'react'
import {
    BtnWrap,
    CheckSkillsLink,
    Field,
    FieldContainer,
    FieldDesc,
    FieldWrap,
    Form,
    FormBtn,
    SkillFormWrap,
  } from "./AddNewSkillFormElements";

const AddNewSkillForm = () => {
    return (
        <SkillFormWrap>
      <Form>
        <FieldContainer>
        <FieldWrap>
          <FieldDesc htmlFor="name">Habilidade</FieldDesc>
          <Field name="name" placeholder="Ex: CSS"/>
        </FieldWrap>

        <FieldWrap>
          <FieldDesc htmlFor="name">Categoria</FieldDesc>
          <Field name="category" placeholder="Ex: Front-End"/>          
        </FieldWrap>

        </FieldContainer>
        <BtnWrap>
          <FormBtn type="button" >
            Adicionar
          </FormBtn>
          <CheckSkillsLink href="/all_skills">
            <button type="button" className="linkBtn">Visualizar Catalogo</button>
          </CheckSkillsLink>
        </BtnWrap>
      </Form>
    </SkillFormWrap>
    )
}

export default AddNewSkillForm
