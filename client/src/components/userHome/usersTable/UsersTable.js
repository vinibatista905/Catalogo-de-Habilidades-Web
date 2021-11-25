import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import {
  Container,
  SearchField,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableTD,
  TableTH,
  TableTHEmail,
  TableTHName,
  TableTitle,
  TableTR,
  TableWrapper,
} from "./UsersTableElements";

const UsersTable = () => {
  // REQ PARA A API
  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/user/all_users`).then(({ data }) => {
      setUsersInfo(data);
      console.log(data);
      // eslint-disable-next-line
    });
  }, []);

  // ORDENAR OS DADOS DA TABELA
  const [order, setOrder] = useState("ASC");
  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...usersInfo].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setUsersInfo(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...usersInfo].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setUsersInfo(sorted);
      setOrder("ASC");
    }
  };

  // FILTRAR OS USUÁRIOS
  const [searchTerm, setSearchTerm] = useState("");

  // PAGINAÇÃO DOS USUÁRIOS
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = usersInfo
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .filter((user) => {
      if (searchTerm === "") {
        return user;
      } else if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return user;
      }
    })
    .map((user) => {
      return (
        <TableTR key={user.id}>
          <TableTD data-label="ID">{user.id}</TableTD>
          <TableTD data-label="Nome"><a className='user-link' href={`/profiles/${user.id}`}>{user.name}</a></TableTD>
          <TableTD data-label="E-mail">{user.email}</TableTD>
          <TableTD data-label="Skills">
            <button className="tdButton">
              <a href={"/users/" + user.id} className="btnLink">
                Ver Skills
              </a>
            </button>
          </TableTD>
          <TableTD data-label="Projetos">
            <button className="tdButton">
              <a href={"/users/projects/" + user.id} className="btnLink">
                Visualizar
              </a>
            </button>
          </TableTD>
        </TableTR>
      );
    });

  const pageCount = Math.ceil(usersInfo.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
    <Container>
      <TableContainer>
        <TableTitle>Veja todos os usuários cadastrados</TableTitle>
        <SearchField
          type="text"
          placeholder="Pesquisar usuário..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <TableWrapper>
          <Table>
            <TableHead>
              <TableTH>ID</TableTH>
              <TableTHName onClick={() => sorting("name")}>Nome</TableTHName>
              <TableTHEmail onClick={() => sorting("email")}>
                E-mail
              </TableTHEmail>
              <TableTH>Skills</TableTH>
              <TableTH>Projetos</TableTH>
            </TableHead>
            <TableBody>{displayUsers}</TableBody>
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
      </Container>
    </>
  );
};

export default UsersTable;
