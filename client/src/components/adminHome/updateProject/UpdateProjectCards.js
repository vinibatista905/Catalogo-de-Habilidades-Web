import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardsContainer,
  DeleteIcon,
  EditIcon,
  End,
  IconsWrap,
  Manager,
  Project,
  ProjectSkills,
  SkillTag,
  Start,
  Tag,
} from "./UpdateProjectCardsElements";

const ProjectCards = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/admin/check_project`).then(({ data }) => {
      setProjects(data);
      console.log(data);

      // eslint-disable-next-line
    });
  }, []);

  return (
    <>
      <CardsContainer>
        {projects?.map((project) => (
          <Card id="target">
            <CardImg src={require("../../../assets/project-3.png").default} />
            <Project key={project.id}>{project.name}</Project>
            <Manager>
              <span className="span">Gestor:</span> {project.manager}
            </Manager>
            <Start>
              <span className="span">Início:</span> {project.startDate}
            </Start>
            <End>
              <span className="span">Conclusão: </span>
              {project.conclusionDate}
            </End>

            <ProjectSkills>
              <span className="span">Skills do Projeto: </span>
            </ProjectSkills>

            <SkillTag>
              {project.skill1 != null && project.skill1.length > 0 ? (
                <Tag>{project.skill1}</Tag>
              ) : null}
              {project.skill2 != null && project.skill2.length > 0 ? (
                <Tag>{project.skill2}</Tag>
              ) : null}
              {project.skill3 != null && project.skill3.length > 0 ? (
                <Tag>{project.skill3}</Tag>
              ) : null}
              {project.skill4 != null && project.skill4.length > 0 ? (
                <Tag>{project.skill4}</Tag>
              ) : null}
              {project.skill5 != null && project.skill5.length > 0 ? (
                <Tag>{project.skill5}</Tag>
              ) : null}
              {project.skill6 != null && project.skill6.length > 0 ? (
                <Tag>{project.skill6}</Tag>
              ) : null}
              {project.skill7 != null && project.skill7.length > 0 ? (
                <Tag>{project.skill7}</Tag>
              ) : null}
              {project.skill8 != null && project.skill8.length > 0 ? (
                <Tag>{project.skill8}</Tag>
              ) : null}
            </SkillTag>

            <IconsWrap className="icons">
            <a href={"/admin/update_project/" + project.id}>
                <EditIcon />
              </a>
              <DeleteIcon
                onClick={() => {
                  const projectId = project.id;
                  const confirm = window.confirm(
                    "Deseja deletar esse projeto?"
                  );
                  if (confirm === true) {
                    axios.delete(
                      `http://localhost:5000/admin/delete_project/${projectId}`
                    );
                    alert("Projeto Deletado!");
                    window.location.reload(false);
                  } else {
                    console.log("cancelado");
                  }
                }}
              />
            </IconsWrap>
          </Card>
        ))}
      </CardsContainer>
    </>
  );
};

export default ProjectCards;
