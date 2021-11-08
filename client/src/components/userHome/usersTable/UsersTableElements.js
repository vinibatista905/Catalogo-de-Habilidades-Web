import styled from "styled-components";
import {
  bgAmarelo,
  bgAzul,
  bgCinza,
  btnAmarelo,
  txBranco,
  txCinzaEscuro,
} from "../../UI/variaveis";

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 75vh;
  background: ${txBranco};
  border-radius: 12px;
  border: 1.5px ${bgAmarelo} solid;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
`;

export const TableTitle = styled.h2`
  font-size: 2.5rem;
  color: ${txCinzaEscuro};
  padding: 2rem 0;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  width: 80%;
  font-size: 1rem;
  min-width: 400px;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

export const TableHead = styled.thead`
  background-color: ${bgAzul};
  color: ${txBranco};
  text-align: left;
  font-weight: bold;
`;

export const TableBody = styled.tbody`
  width: 100%;
`;

export const TableTR = styled.tr`
  border-bottom: 1px solid ${bgCinza};
`;

export const TableTH = styled.th`
  padding: 12px 15px;
  font-size: 1rem;
`;

export const TableTD = styled.td`
  padding: 12px 15px;
  font-size: 1rem;

  .tdButton {
    width: 6rem;
    height: 2.2rem;
    border-radius: 10px;
    background: ${btnAmarelo};
    border: none;
    transition: ease-out 0.3s;
    box-shadow: inset 0 0 0 0 ${btnAmarelo};
    outline: none;
    cursor: pointer;

    :hover {
      box-shadow: inset 8rem 0 0 0 #f24b43;
    }
  }
`;
