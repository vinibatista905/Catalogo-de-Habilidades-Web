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
  ProjectFormWrap,
} from "./ProjectFormElements";

const ProjectForm = () => {
  // REQ PARA RECEBER TODOS OS PROJETOS
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/user/all_projects").then(({ data }) => {
      setAllProjects(data);

      // eslint-disable-next-line
    });
  }, []);

  const projectData = Array.from(allProjects);

  function projectOptions() {
    return projectData.map((skill) => {
      return { value: skill.name, label: skill.name };
    });
  }

  const [value, setValue] = useState(null);
  const projectSelect = (value) => {
    setValue(value);
  };

  // SUBMIT DO PROJETO
  const onSubmit = async () => {
    const userId = localStorage.getItem("user_id");
    const selectedProject = {
      name: value.value,
      id: userId,
    };

    await axios
      .post("http://localhost:5000/user/add_project", selectedProject)
      .then((resp) => {
        const data = resp.data;
        if (data) {
          alert("Projeto Adicionado!");
        }
      })
      .catch((err) => {
        alert("Projeto já cadastrado! Por favor adicione outro projeto.");
      });
  };

  return (
    <ProjectFormWrap>
      <Form>
        <FieldContainer>
          <FieldWrap>
            <FieldDesc htmlFor="name">Projeto</FieldDesc>
            <CustomSelect onChange={projectSelect} options={projectOptions()} />
          </FieldWrap>
        </FieldContainer>

        <BtnWrap>
          <FormBtn type="button" onClick={onSubmit}>
            Adicionar
          </FormBtn>
          <CheckSkillsLink href="/all_projects">
            <button type="button" className="linkBtn">
              Visualizar Projetos
            </button>
          </CheckSkillsLink>
        </BtnWrap>
      </Form>
    </ProjectFormWrap>
  );
};

export default ProjectForm;
