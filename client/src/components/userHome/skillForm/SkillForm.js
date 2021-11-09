import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  CustomSelect,
  FieldDesc,
  FieldWrap,
  Form,
  FormBtn,
  IdInput,
  SkillFormWrap,
} from "./SkillFormElements";

const typeOptions = [
  { label: "Front-End", value: "Front-End" },
  { label: "Back-End", value: "Back-End" },
  { label: "Banco de Dados", value: "Database" },
  { label: "DevOps", value: "DevOps" },
];

const levelOptions = [
  { label: "Básico", value: "Básico" },
  { label: "Intermediário", value: "Intermediário" },
  { label: "Avançado", value: "Avançado" },
  { label: "Especialista", value: "Especialista" },
];


const SkillForm = () => {

  // REQ PARA RECEBER TODAS AS HABILIDADES
  const [allSkills, setAllSkills] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/user/all_skills").then(({ data }) => {
      setAllSkills(data);

      // eslint-disable-next-line
    });
  }, []);



  // SELEÇÃO DE HABILIDADES
  const [skillType, setSkillType] = useState({});

  function onChangeInput(value) {
    const skillType = value;
    setSkillType(skillType);
    console.log(skillType);
  }


  // LÓGICA PARA FILTRAR AS HABILIDADES
  function skillOptions(skillType) {
  return allSkills.filter((skill) => skill.category === skillType.value).map((skill) => {
    return {label: skill.name, value: skill.name}
  })

  }

  // SUBMIT DO FORMULARIO
  const handleSubmit = async (values) => {
    console.log(values);
    
    // const userId = localStorage.getItem("user_id")
    // console.log(userId)
  };
    
  return (
    <SkillFormWrap>
      <Form onSubmit={handleSubmit}>
        <FieldWrap>
          <FieldDesc>Tipo</FieldDesc>
          <CustomSelect options={typeOptions} onChange={onChangeInput} />
        </FieldWrap>

        <FieldWrap>
          <FieldDesc>Habilidade</FieldDesc>
          <CustomSelect options={skillOptions(skillType)} />
        </FieldWrap>

        <FieldWrap>
          <FieldDesc>Nível</FieldDesc>
          <CustomSelect options={levelOptions} />
          {/* <IdInput type="text">{userId}</IdInput> */}
        </FieldWrap>
        <FormBtn type="submit">Adicionar</FormBtn>
      </Form>
    </SkillFormWrap>
  );
};

export default SkillForm;
