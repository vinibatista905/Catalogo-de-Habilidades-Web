import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import {
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
  TableTHEmail,
  TableTHName,
  TableTitle,
  TableTR,
  TableWrapper,
} from "./UpdateUserTableElements";

const UpdateUserTable = () => {
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
          <TableTD>{user.id}</TableTD>
          <TableTD>{user.name}</TableTD>
          <TableTD>{user.email}</TableTD>
          <TableTD>
            <IconsWrap>
              <a href={"/admin/update_user/" + user.id}>
                <EditIcon />
              </a>
              <DeleteIcon
                onClick={() => {
                  const userId = user.id;
                  alert("Deseja deletar esse usuário?");
                  axios.delete(
                    `http://localhost:5000/admin/delete_user/${userId}`
                  );
                  alert("Usuário Deletado!");
                  window.location.reload(false);
                }}
              />
            </IconsWrap>
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
        <TableTitle>Edite um usuário</TableTitle>
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
              <TableTH>ID</TableTH>
              <TableTHName onClick={() => sorting("name")}>Nome</TableTHName>
              <TableTHEmail onClick={() => sorting("email")}>
                E-mail
              </TableTHEmail>
              <TableTH>Editar</TableTH>
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

export default UpdateUserTable;
