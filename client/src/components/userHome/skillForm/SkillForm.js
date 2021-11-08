import React, { useState } from "react";
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
  { label: "DevOps", value: "DevOps" },
];

const frontOptions = [
  { label: "Angular", value: "Angular" },
  { label: "Bootstrap", value: "Bootstrap" },
  { label: "CSS", value: "CSS" },
  { label: "Flutter", value: "Flutter" },
  { label: "HTML", value: "HTML" },
  { label: "Javascript", value: "Javascript" },
  { label: "Next.js", value: "Next.js" },
  { label: "PHP", value: "PHP" },
  { label: "React", value: "React" },
  { label: "React Native", value: "React Native" },
  { label: "Sass", value: "Sass" },
  { label: "Swift", value: "Swift" },
  { label: "Typescript", value: "Typescript" },
  { label: "VueJS", value: "VueJS" },
];

const backOptions = [
  { label: ".NET", value: ".NET" },
  { label: "AdonisJS", value: "AdonisJS" },
  { label: "C", value: "C" },
  { label: "C#", value: "C#" },
  { label: "C++", value: "C++" },
  { label: "Dart", value: "Dart" },
  { label: "Express", value: "Express" },
  { label: "Go", value: "Go" },
  { label: "Java", value: "Java" },
  { label: "Javascript", value: "Javascript" },
  { label: "Kotlin", value: "Kotlin" },
  { label: "NestJS", value: "NestJS" },
  { label: "NodeJS", value: "NodeJS" },
  { label: "Objective-C", value: "Objective-C" },
  { label: "PHP", value: "PHP" },
  { label: "Python", value: "Python" },
  { label: "Ruby", value: "Ruby" },
  { label: "Rust", value: "Rust" },
  { label: "Swift", value: "Swift" },
  { label: "Typescript", value: "Typescript" },
  { label: "Xamarin", value: "Xamarin" },
];

const dbOptions = [
  { label: "Firebase", value: "Firebase" },
  { label: "MongoDB", value: "MongoDB" },
  { label: "MySQL", value: "MySQL" },
  { label: "NoSQL", value: "NoSQL" },
  { label: "Oracle", value: "Oracle" },
  { label: "PostgreSQL", value: "PostgreSQL" },
];

const devOpsOptions = [
  { label: "AWS", value: "AWS" },
  { label: "Docker", value: "Docker" },
  { label: "Git", value: "Git" },
  { label: "Github", value: "Github" },
  { label: "Kubernetes", value: "Kubernetes" },
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



function skillOptions(skillType) {
  if (skillType.label === "Front-End") {
    return frontOptions;
  }

  if (skillType.label === "Back-End") {
    return backOptions;
  }

  if (skillType.label === "Banco de Dados") {
    return dbOptions;
  }

  if (skillType.label === "DevOps") {
    return devOpsOptions;
  }
}

const SkillForm = () => {

  const [skillType, setSkillType] = useState({})

  function onChangeInput(value) {
    const skillType = value;
    setSkillType(skillType);
  }

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
        </FieldWrap>
        <FormBtn type="submit">Adicionar</FormBtn>
      </Form>
    </SkillFormWrap>
  );
};

export default SkillForm;

// LISTA DE LINGUAGENS

// .NET
// Angular
// AWS
// Bootstrap
// C
// C#
// C++
// CSS
// Dart
// Docker
// Express
// Flutter
// Go
// HTML
// Java
// Javascript
// Kotlin
// Kubernetes
// MongoDB
// MySQL
// NestJS
// Next.js
// NodeJS
// NoSQL
// Objective-C
// Oracle
// PHP
// PostgreSQL
// Python
// React
// React Native
// Ruby
// Rust
// Sass
// Swift
// Typescript
// VueJS
// Xamarin
