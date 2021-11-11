import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BtnWrap,
  CheckSkillsLink,
  CustomSelect,
  FieldContainer,
  FieldDesc,
  FieldWrap,
  Form,
  FormBtn,
  SkillFormWrap,
} from "./SkillFormElements";

const typeOptions = [
  { value: "Front-End", label: "Front-End" },
  { value: "Back-End", label: "Back-End" },
  { value: "Database", label: "Banco de Dados" },
  { value: "DevOps", label: "DevOps" },
];

const levelOptions = [
  { value: "Básico", label: "Básico" },
  { value: "Intermediário", label: "Intermediário" },
  { value: "Avançado", label: "Avançado" },
  { value: "Especialista", label: "Especialista" },
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
    return allSkills
      .filter((skill) => skill.category === skillType.value)
      .map((skill) => {
        return { value: skill.name, label: skill.name };
      });
  }

  const [valor, setValor] = useState(null);
  const skillSelect = (value) => {
    setValor(value);
    console.log(value);
  };

  const [selectedLevel, setSelectedLevel] = useState(null);
  const skillLevel = selectedLevel;
  console.log(skillLevel);

  // SUBMIT DA HABILIDADE
  const onSubmit = async () => {
    const userId = localStorage.getItem("user_id");
    const skillData = {
      name: valor.value,
      level: skillLevel.value,
      type: skillType.value,
      idUser: userId,
    };

    await axios
      .post("http://localhost:5000/user/create_skill", skillData)
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
      <Form>
        <FieldContainer>
        <FieldWrap>
          <FieldDesc htmlFor="type">Tipo</FieldDesc>
          <CustomSelect onChange={onChangeInput} options={typeOptions} />
        </FieldWrap>

        <FieldWrap>
          <FieldDesc htmlFor="name">Habilidade</FieldDesc>
          <CustomSelect
            onChange={skillSelect}
            options={skillOptions(skillType)}
          />
        </FieldWrap>

        <FieldWrap>
          <FieldDesc htmlFor="level">Nível</FieldDesc>
          <CustomSelect onChange={setSelectedLevel} options={levelOptions} />
        </FieldWrap>
        </FieldContainer>
        <BtnWrap>
          <FormBtn type="button" onClick={onSubmit}>
            Adicionar
          </FormBtn>
          <CheckSkillsLink href="/all_skills">
            <button type="button" className="linkBtn">Visualizar Catalogo</button>
          </CheckSkillsLink>
        </BtnWrap>
      </Form>
    </SkillFormWrap>
  );
};

export default SkillForm;
