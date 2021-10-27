import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NotFoundDesc = styled.h1`
  font-size: 4rem;

  @media only screen and (max-width: 720px) {
    font-size: 2rem;
  }
`;

export const NotFoundImg = styled.img`
  width: 40rem;

  @media only screen and (max-width: 720px) {
    width: 70%;
  }
`;