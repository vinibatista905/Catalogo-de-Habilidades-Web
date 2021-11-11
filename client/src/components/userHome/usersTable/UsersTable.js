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
          <TableTD>{user.name}</TableTD>
          <TableTD>{user.email}</TableTD>
          <TableTD>
            <button className="tdButton">
              <a href={"/users/" + user.id} className="btnLink">
                Ver Skills
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
      <TableContainer>
        <TableTitle>Veja todos os usuários cadastrados</TableTitle>
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
                <TableTH>Nome</TableTH>
                <TableTH>E-mail</TableTH>
                <TableTH>Skills</TableTH>
              </TableTR>
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
    </>
  );
};

export default UsersTable;
