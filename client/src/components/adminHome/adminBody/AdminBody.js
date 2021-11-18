import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BodyContainer,
  Card1,
  Card2,
  Card3,
  Card4,
  CardDesc,
  CardIcon1,
  CardIcon2,
  CardIcon3,
  CardIcon4,
  CardIcon5,
  CardImg,
  CardLink,
  CardRow,
  Message1,
  OptionCards,
  Section1,
  Section2,
  Title,
  User,
  WelcomeCard,
} from "./AdminBodyElements";

const AdminBody = () => {
  const [userInfo, setUserInfo] = useState([]);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    axios.get(`http://localhost:5000/user/info/${userId}`).then(({ data }) => {
      setUserInfo(data);
      // eslint-disable-next-line
    });
  }, []);

  return (
    <BodyContainer>
      <WelcomeCard>
        <Section1>
          <Title>Seja Bem Vindo(a)</Title>
          <User>Administrador(a)</User>
          <Message1>O que você quer fazer hoje?</Message1>
        </Section1>
        <Section2>
          <CardImg
            src={require("../../../assets/welcome-2.png").default}
          ></CardImg>
        </Section2>
      </WelcomeCard>

      <OptionCards>
        <CardRow>
        <CardLink href="/admin/add_skill">
          <Card1>
            <CardIcon1></CardIcon1>
            <CardDesc>Adicionar Habilidades ao Catálogo Principal</CardDesc>
          </Card1>
        </CardLink>

        <CardLink href="/admin/skills_catalog">
          <Card2>
            <CardIcon2></CardIcon2>
            <CardDesc>Atualizar Habilidades do Catálogo Principal</CardDesc>
          </Card2>
        </CardLink>

        <CardLink href="/admin/all_users">
          <Card3>
            <CardIcon3></CardIcon3>
            <CardDesc>Consultar Usuários</CardDesc>
          </Card3>
        </CardLink>

        <CardLink href="/admin/update_users">
          <Card4>
            <CardIcon4></CardIcon4>
            <CardDesc>Editar Usuários</CardDesc>
          </Card4>
        </CardLink>

        <CardLink href="/admin/create_project">
          <Card1>
            <CardIcon1></CardIcon1>
            <CardDesc>Criar Novo Projeto</CardDesc>
          </Card1>
        </CardLink>

        <CardLink href="/admin/skills_catalog">
          <Card2>
            <CardIcon5></CardIcon5>
            <CardDesc>Consultar Projetos</CardDesc>
          </Card2>
        </CardLink>

        <CardLink href="/">
          <Card3>
            <CardIcon2></CardIcon2>
            <CardDesc>Editar Projetos</CardDesc>
          </Card3>
        </CardLink>

        <CardLink href="/">
          <Card4>
            <CardIcon4></CardIcon4>
            <CardDesc>(Opção Reserva)</CardDesc>
          </Card4>
        </CardLink>
        </CardRow>
      </OptionCards>
    </BodyContainer>
  );
};

export default AdminBody;
