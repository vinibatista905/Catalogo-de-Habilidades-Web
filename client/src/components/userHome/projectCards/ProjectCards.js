import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardImg,
  CardsContainer,
  End,
  Manager,
  Project,
  ProjectSkills,
  SkillTag,
  Start,
  Tag,
} from "./ProjectCardsElements";

const ProjectCards = () => {
  const userId = localStorage.getItem("user_id");

  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/check_project/${userId}`)
      .then(({ data }) => {
        setUserProjects(data);
        console.log(data);

        // eslint-disable-next-line
      });
  }, []);

  return (
    <>
      <CardsContainer>
        {userProjects?.map((user) =>
          user.Projects.map((project) => (
            <Card>
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

                <ProjectSkills><span className="span">Skills do Projeto: </span></ProjectSkills>
                
              <SkillTag> 
                <Tag>{project.skill1}</Tag>
                <Tag>{project.skill2}</Tag>
                <Tag>{project.skill3}</Tag>
                <Tag>{project.skill4}</Tag>
                <Tag>{project.skill5}</Tag>
                <Tag>{project.skill6}</Tag>
                <Tag>{project.skill7}</Tag>
                <Tag>{project.skill8}</Tag>
              </SkillTag>
            </Card>
          ))
        )}
      </CardsContainer>
    </>
  );
};

export default ProjectCards;
