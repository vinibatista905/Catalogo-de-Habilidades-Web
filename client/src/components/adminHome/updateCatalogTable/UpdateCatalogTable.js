import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

import {
  AddSkillLink,
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
} from "./UpdateCatalogTableElements";

const UpdateCatalogTable = () => {
  // REQ PARA A API ---> RECEBE AS HABILIDADES CATALOGADAS

  const [skillsCatalog, setSkillsCatalog] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/admin/all_new_skills`).then(({ data }) => {
      setSkillsCatalog(data);
      console.log(data);

      // eslint-disable-next-line
    });
  }, []);

  // ORDENAR OS DADOS DA TABELA
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...skillsCatalog].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setSkillsCatalog(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...skillsCatalog].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setSkillsCatalog(sorted);
      setOrder("ASC");
    }
  };

  // FILTRAR AS HABILIDADES
  const [searchTerm, setSearchTerm] = useState("");

  // PAGINAÇÃO DAS HABILIDADES
  const [pageNumber, setPageNumber] = useState(0);

  const skillsPerPage = 10;
  const pagesVisited = pageNumber * skillsPerPage;

  const displaySkills = skillsCatalog
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
          <TableTD>{skill.id}</TableTD>
          <TableTD>{skill.name}</TableTD>
          <TableTD>{skill.category}</TableTD>
          <TableTD>
            <IconsWrap>
              <a href={"/admin/update_catalog/" + skill.id}>
                <EditIcon />
              </a>
              <DeleteIcon
                onClick={() => {
                  const skillId = skill.id;
                  alert("Deseja deletar essa habilidade?");
                  axios.delete(
                    `http://localhost:5000/admin//delete_new_skill/${skillId}`
                  );
                  alert("Habilidade Deletada do Catálogo!");
                  window.location.reload(false);
                }}
              />
            </IconsWrap>
          </TableTD>
        </TableTR>
      );
    });

  const pageCount = Math.ceil(skillsCatalog.length / skillsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <TableContainer>
        <TableTitle>Edite o catálogo de habilidades</TableTitle>
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
                <TableTH>ID</TableTH>
                <TableTH onClick={() => sorting("name")}>Habilidade</TableTH>
                <TableTH onClick={() => sorting("category")}>Categoria</TableTH>
                <TableTH>Editar</TableTH>
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
        <AddSkillLink href="/admin/add_skill">
          <button className="addBtn">Adicionar Habilidades</button>
        </AddSkillLink>
      </TableContainer>
    </>
  );
};

export default UpdateCatalogTable;
