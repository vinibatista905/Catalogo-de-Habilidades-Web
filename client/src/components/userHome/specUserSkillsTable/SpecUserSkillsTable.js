import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
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
  UserName,
} from "./SpecUserSkillsElements";

const SpecUserSkillsTable = () => {
  const userId = useParams();

  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/check_skills_byUser/${userId.id}`)
      .then(({ data }) => {
        setUserSkills(data);
        console.log(data);
        console.log(userId);
        // eslint-disable-next-line
      });
  }, []);

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/info/${userId.id}`)
      .then(({ data }) => {
        setUserInfo(data);
        console.log(data);

        // eslint-disable-next-line
      });
  }, []);

  return (
    <>
      <TableContainer>
        <TableTitle>Veja as habilidades do(a) usuário(a)</TableTitle>
        {userInfo?.map((user) => (
          <UserName key={user.id}>{user.name}</UserName>
        ))}
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

export default SpecUserSkillsTable;
