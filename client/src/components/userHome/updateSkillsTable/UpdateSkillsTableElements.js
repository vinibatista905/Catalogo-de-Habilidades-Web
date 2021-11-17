import styled from "styled-components";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import {
  bgAmarelo,
  bgAzul,
  bgCinza,
  btnAmarelo,
  btnAzul,
  btnVerde,
  txBranco,
  txCinzaEscuro,
  txVermelho,
} from "../../UI/variaveis";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60rem;
  background: ${txBranco};
  border-radius: 12px;
  border: 1.5px ${bgAmarelo} solid;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);

  .paginationBtn {
    width: 0%;
    height: 3.5rem;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
  }

  .paginationBtn a {
    padding: 0.8rem;
    margin: 0.5rem;
    border-radius: 5px;
    border: 1px solid ${bgAzul};
    color: ${bgAzul};
    cursor: pointer;
  }

  .paginationBtn a:hover {
    color: ${txBranco};
    background-color: ${bgAzul};
    transition: ease 0.3s;
  }

  .paginationActive a {
    color: ${txBranco};
    background-color: ${bgAzul};
  }
`;

export const TableTitle = styled.h2`
  font-size: 2.5rem;
  color: ${txCinzaEscuro};
  padding: 2rem 0;
`;

export const SearchField = styled.input`
  font-size: 1.2rem;
  width: 15rem;
  height: 3rem;
  padding: 0.7rem;
  border-radius: 10px;
  border: 2px solid ${bgAmarelo};
  outline: none;

  :focus {
    box-shadow: 0 0 5px 4px rgba(0, 0, 0, 0.3);
    border: 2px solid ${btnAzul};
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 2rem;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  width: 80%;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export const TableHead = styled.thead`
  background-color: ${bgAzul};
  color: ${txBranco};
  text-align: left;
  font-weight: bold;
  text-align: center;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableTR = styled.tr`
  border-bottom: 1px solid ${bgCinza};
  transition: ease 0.2s;

  :hover {
    background: ${bgCinza};
  }
`;

export const TableTH = styled.th`
  padding: 12px 15px;
  font-size: 1.4rem;
  cursor: pointer;

  :hover {
    color: ${bgAmarelo};
    background: ${btnAzul};
    transition: ease 0.3s;
  }
`;

export const TableTD = styled.td`
  padding: 12px 15px;
  font-size: 1.2rem;
`;

export const UserName = styled.h2`
  font-size: 2.5rem;
  color: ${txCinzaEscuro};
`;

export const AddSkillLink = styled.a`
  text-decoration: none;
  position: relative;
  left: 25rem;
  bottom: 5.8rem;

  .addBtn {
    width: 8rem;
    height: 3.4rem;
    border-radius: 10px;
    background: ${btnAmarelo};
    border: none;
    transition: ease-out 0.3s;
    box-shadow: inset 0 0 0 0 ${btnAmarelo};
    outline: none;
    cursor: pointer;

    :hover {
      box-shadow: inset 8rem 0 0 0 #f24b43;
      font-weight: bold;
    }
  }
`;

export const IconsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const EditIcon = styled(FiEdit)`
  font-size: 1.5rem;
  color: ${btnVerde};

  :hover {
    transform: scale(1.4);
    transition: ease 0.3s;
  }
`;

export const DeleteIcon = styled(MdDeleteForever)`
  font-size: 1.8rem;
  color: ${txVermelho};
  cursor: pointer;
  :hover {
    transform: scale(1.4);
    transition: ease 0.3s;
  }
`;
