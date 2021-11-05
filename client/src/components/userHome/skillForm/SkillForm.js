import React from "react";
import {
  CustomSelect,
  FieldDesc,
  FieldWrap,
  Form,
  FormBtn,
  SkillFormWrap,
} from "./SkillFormElements";

const typeOptions = [
  { label: "Front-End", value: "Front-End" },
  { label: "Back-End", value: "Back-End" },
  { label: "Banco de Dados", value: "Banco de Dados" },
];

const skillOptions = [
  { label: "HTML", value: "HTML" },
  { label: "CSS", value: "CSS" },
  { label: "Javascript", value: "Javascript" },
  { label: "Angular", value: "Angular" },
  { label: "React", value: "React" },
];

const levelOptions = [
  { label: "Básico", value: "Básico" },
  { label: "Intermediário", value: "Intermediário" },
  { label: "Avançado", value: "Avançado" },
  { label: "Especialista", value: "Especialista" },
];

const handleSubmit = (values) => {
    console.log(values);
    
  };


const SkillForm = () => {
  return (
    <SkillFormWrap>
        
      <Form onSubmit={handleSubmit} >
        <FieldWrap>
          <FieldDesc>Tipo</FieldDesc>
          <CustomSelect options={typeOptions} />
        </FieldWrap>

        <FieldWrap>
          <FieldDesc>Habilidade</FieldDesc>
          <CustomSelect options={skillOptions} />
        </FieldWrap>

        <FieldWrap>
          <FieldDesc>Nível</FieldDesc>
          <CustomSelect options={levelOptions} />
        </FieldWrap>
      <FormBtn type='submit'>Adicionar</FormBtn>
      </Form>
      
    </SkillFormWrap>
  );
};

export default SkillForm;
