import React from "react";
import { Container, NotFoundDesc, NotFoundImg } from "./NotFoundElements";

const NotFound = () => {
  return (
    <Container>
      <NotFoundDesc>Page Not Found</NotFoundDesc>
      <NotFoundImg
        src={require("../../assets/404.png").default}
        alt="Página Não Encontrada"
      />
    </Container>
  );
};

export default NotFound;
