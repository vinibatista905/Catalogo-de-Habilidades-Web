import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Table,
  TableBody,
  TableHead,
  TableTD,
  TableTH,
  TableTitle,
  TableTR,
  TableWrapper,
} from "./UsersTableElements";

const UsersTable = () => {
  const [usersInfo, setUsersInfo] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/user/all_users`).then(({ data }) => {
      setUsersInfo(data);
      console.log(data);
      // eslint-disable-next-line
    });
  }, []);

  return (
    <>
      <TableWrapper>
        <TableTitle>Veja todos os usuários cadastrados</TableTitle>
        <Table>
          <TableHead>
            <TableTR>
              <TableTH>Nome</TableTH>
              <TableTH>E-mail</TableTH>
              <TableTH>Skills</TableTH>
            </TableTR>
          </TableHead>
          <TableBody>
            {usersInfo?.map((user) => (
              <TableTR>
                <TableTD>{user.name}</TableTD>
                <TableTD>{user.email}</TableTD>
                <TableTD>
                  <button className="tdButton">Ver Skills</button>
                </TableTD>
              </TableTR>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </>
  );
};

export default UsersTable;
