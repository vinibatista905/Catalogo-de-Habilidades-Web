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
      <TableContainer>
        <TableTitle>Veja todos os usuários cadastrados</TableTitle>
        <TableWrapper>
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
              <TableTR key={user.id}> 
                <TableTD>{user.name}</TableTD>
                <TableTD>{user.email}</TableTD>
                <TableTD>
                  <button className="tdButton"><a href={'/users/' + user.id} className='btnLink'>Ver Skills</a></button>
                </TableTD>
              </TableTR>
            ))}
          </TableBody>
        </Table>
        </TableWrapper>
      </TableContainer>
    </>
  );
};

export default UsersTable;
