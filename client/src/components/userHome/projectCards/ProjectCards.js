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
              {project.skill1 != null && project.skill1.length > 0 ? (<Tag className='tag'>{project.skill1}</Tag>) : null}
              {project.skill2 != null && project.skill2.length > 0 ? (<Tag className='tag'>{project.skill2}</Tag>) : null}
              {project.skill3 != null && project.skill3.length > 0 ? (<Tag className='tag'>{project.skill3}</Tag>) : null}
              {project.skill4 != null && project.skill4.length > 0 ? (<Tag className='tag'>{project.skill4}</Tag>) : null}
              {project.skill5 != null && project.skill5.length > 0 ? (<Tag className='tag'>{project.skill5}</Tag>) : null}
              {project.skill6 != null && project.skill6.length > 0 ? (<Tag className='tag'>{project.skill6}</Tag>) : null}
              {project.skill7 != null && project.skill7.length > 0 ? (<Tag className='tag'>{project.skill7}</Tag>) : null}
              {project.skill8 != null && project.skill8.length > 0 ? (<Tag className='tag'>{project.skill8}</Tag>) : null}              
              </SkillTag>
            </Card>
          ))
        )}
      </CardsContainer>
    </>
  );
};

export default ProjectCards;
