import React, { useEffect, useState } from "react";
import axios from "axios";
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
} from "./UserSkillsTableElements";

const UserSkillsTable = () => {
  // REQ PARA A API
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
        <TableTitle>Esse é o seu catálogo de habilidades</TableTitle>
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
              <TableTR>
                <TableTH>Tipo</TableTH>
                <TableTH>Habilidade</TableTH>
                <TableTH>Nível</TableTH>
              </TableTR>
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

export default UserSkillsTable;
