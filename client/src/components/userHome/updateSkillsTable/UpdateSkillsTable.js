import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

import {
  AddSkillLink,
  Container,
  DeleteIcon,
  EditIcon,
  IconsWrap,
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
} from "./UpdateSkillsTableElements";

const UpdateSkillsTable = () => {
  // REQ PARA A API ---> RECEBE AS HABILIDADES
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
          <TableTD data-label="Tipo">{skill.type}</TableTD>
          <TableTD data-label="Nome">{skill.name}</TableTD>
          <TableTD data-label="Nível">{skill.level}</TableTD>
          <TableTD data-label="Editar">
            <IconsWrap>
              <a href={"/update_skill/" + skill.id}>
                <EditIcon />
              </a>
              <DeleteIcon
                onClick={() => {
                  const skillId = skill.id;
                  const confirm = window.confirm(
                    "Deseja deletar essa habilidade?"
                  );
                  if (confirm === true) {
                    axios.delete(
                      `http://localhost:5000/user/delete_skill/${skillId}`
                    );
                    alert("Habilidade Deletada!");
                    window.location.reload(false);
                  } else {
                    console.log("cancelado");
                  }
                }}
              />
            </IconsWrap>
          </TableTD>
        </TableTR>
      );
    });

  const pageCount = Math.ceil(userSkills.length / skillsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Container>
        <TableContainer>
          <TableTitle>Edite suas habilidades</TableTitle>
          <SearchField
            type="text"
            placeholder="Pesquisar habilidade..."
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
                <TableTH>Editar</TableTH>
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
          <AddSkillLink href="/create_skill">
            <button className="addBtn">Adicionar Habilidades</button>
          </AddSkillLink>
        </TableContainer>
      </Container>
    </>
  );
};

export default UpdateSkillsTable;
