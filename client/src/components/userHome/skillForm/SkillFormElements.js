import Select from "react-select";
import styled from "styled-components";
import { btnAzul, btnAzulEscuro, txBranco, txCinzaEscuro } from "../../UI/variaveis";

export const SkillFormWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const CustomSelect = styled(Select)`
  width: 15rem;
`;
export const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldDesc = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${txCinzaEscuro};
  padding-bottom: 1rem;
`;
export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 4rem 0;
  position: relative;
  left: 6%;
  bottom: 100%;
`;

export const FormBtn = styled.button`
  width: 6rem;
  height: 3rem;
  background: ${btnAzul};
  color: ${txBranco};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  top: 8rem;
  right: 50%;

  :hover {
    background: ${btnAzulEscuro};
    transition: all 0.2s linear;
  }
`;

export const IdInput = styled.input`
  opacity: 0;
`;