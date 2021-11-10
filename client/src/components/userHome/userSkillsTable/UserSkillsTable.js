import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableTD,
  TableTH,
  TableTitle,
  TableTR,
  TableWrapper,
} from "./UserSkillsTableElements";

const UserSkillsTable = () => {
  const userId = localStorage.getItem("user_id");

  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/check_skill/${userId}`)
      .then(({ data }) => {
        setUserSkills(data);
        console.log(data);

        // eslint-disable-next-line
      });
  }, []);

  return (
    <>
      <TableContainer>
        <TableTitle>Esse é o seu catálogo de habilidades</TableTitle>
        <TableWrapper>
          <Table>
            <TableHead>
              <TableTR>
                <TableTH>Tipo</TableTH>
                <TableTH>Nome</TableTH>
                <TableTH>Nível</TableTH>
              </TableTR>
            </TableHead>
            <TableBody>
              {userSkills?.map((skill) => (
                <TableTR key={skill.id}>
                  <TableTD>{skill.type}</TableTD>
                  <TableTD>{skill.name}</TableTD>
                  <TableTD>{skill.level}</TableTD>
                </TableTR>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </TableContainer>
    </>
  );
};

export default UserSkillsTable;
