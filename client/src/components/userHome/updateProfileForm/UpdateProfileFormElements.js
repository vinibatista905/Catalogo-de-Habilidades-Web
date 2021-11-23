import styled from "styled-components";
import { ImSpinner2 } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import {
  btnAmarelo,
  btnAzul,
  btnAzulEscuro,
  btnVerde,
  txBranco,
  txCinzaEscuro,
} from "../../UI/variaveis";

export const ProjectFormWrap = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 1rem;

  .formField {
    width: 20rem;
    padding: 0.6rem 0.5rem;
    font-size: 1.2rem;
    border-radius: 12px;
    outline: none;
    border: 2px ${btnAmarelo} solid;

    :hover {
      box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.25);
    }

    :focus {
      border: 2px ${btnAzul} solid;
    }
  }

  .form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    gap: 2rem;
  }
`;

export const FieldContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: inherit;
  gap: 2.5rem;
  padding-left: 2rem;
`;

export const FieldWrap = styled.div`
  display: flex;
  flex-direction: column;

  .upload {
    width: 10rem;
    height: 3.4rem;
    margin: 2rem 0;
  }
`;

export const ImageWrap = styled.div`
  position: relative;

  .userImg {
    display: block;
    width: 11.4rem;
    height: 11.4rem;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 8px 10px 6px rgba(0, 0, 0, 0.25);
  }
`;

export const ImageOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 11.4rem;
  height: 11.4rem;
  object-fit: cover;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: ease 0.3s;

  :hover {
    opacity: 1;
  }
`;

export const EditIcon = styled(MdEdit)`
  color: ${txBranco};
  font-size: 3rem;
`;

export const FieldDesc = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${txCinzaEscuro};
  padding-bottom: 1rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding-top: 2rem;
`;

export const FormBtn = styled.button`
  width: 6rem;
  height: 3rem;
  background: ${btnAzul};
  color: ${txBranco};
  border: none;
  border-radius: 12px;
  cursor: pointer;

  :hover {
    background: ${btnAzulEscuro};
    transition: all 0.2s linear;
    color: ${btnAmarelo};
    font-weight: bold;
  }
`;

export const CheckSkillsLink = styled.a`
  text-decoration: none;
`;

export const SubmitBtn = styled.button`
  width: 8.5rem;
  height: 3.4rem;
  font-size: 1.2rem;
  border-radius: 10px;
  background: ${btnAmarelo};
  border: none;
  transition: ease-out 0.3s;
  box-shadow: inset 0 0 0 0 ${btnAmarelo};
  outline: none;
  cursor: pointer;

  :hover {
    box-shadow: inset 8.5rem 0 0 0 #f24b43;
    font-weight: bold;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 2rem;
`;
