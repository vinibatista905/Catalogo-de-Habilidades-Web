import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {
  SearchField,
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
  // REQ PARA A API --> HABILIDADES
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

  // REQ PARA A API --> DADOS DO USUÁRIO
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

  // ORDENAR OS DADOS DA TABELA
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...userSkills].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setUserSkills(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...userSkills].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setUserSkills(sorted);
      setOrder("ASC");
    }
  };

  // FILTRAR AS HABILIDADES
  const [searchTerm, setSearchTerm] = useState("");

  // PAGINAÇÃO DAS HABILIDADES
  const [pageNumber, setPageNumber] = useState(0);

  const skillsPerPage = 10;
  const pagesVisited = pageNumber * skillsPerPage;

  const displaySkills = userSkills
    .slice(pagesVisited, pagesVisited + skillsPerPage)
    .filter((skill) => {
      if (searchTerm === "") {
        return skill;
      } else if (skill.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return skill;
      }
    })
    .map((skill) => {
      return (
        <TableTR key={skill.id}>
          <TableTD>{skill.type}</TableTD>
          <TableTD>{skill.name}</TableTD>
          <TableTD>{skill.level}</TableTD>
        </TableTR>
      );
    });

  const pageCount = Math.ceil(userSkills.length / skillsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <TableContainer>
        <TableTitle>Veja as habilidades do(a) usuário(a)</TableTitle>
        {userInfo?.map((user) => (
          <UserName key={user.id}>{user.name}</UserName>
        ))}
        <SearchField
          type="text"
          placeholder="Pesquisar..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <TableWrapper>
          <Table>
            <TableHead>
              <TableTH onClick={() => sorting("type")}>Tipo</TableTH>
              <TableTH onClick={() => sorting("name")}>Habilidade</TableTH>
              <TableTH onClick={() => sorting("level")}>Nível</TableTH>
            </TableHead>
            <TableBody>{displaySkills}</TableBody>
          </Table>
        </TableWrapper>
        <ReactPaginate
          previousLabel={"Anterior"}
          nextLabel={"Próximo"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtn"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisable"}
          activeClassName={"paginationActive"}
        />
      </TableContainer>
    </>
  );
};

export default SpecUserSkillsTable;
