import React from "react";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      
      <div className="Info">
        <small>©Skills Cat 2021</small>
        </div>
        <div className="Info">
        <small>Criado por Vinicius Batista</small>
      </div>

      <div className="Icons-wrap">
        <a
          className="Footer-Icon"
          href="https://www.instagram.com/vinaobatista/"
          target="_blank"
        >
          <AiOutlineInstagram />
        </a>
        <a
          className="Footer-Icon"
          href="https://www.linkedin.com/in/vinicius-batista-0120016a/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="Footer-Icon"
          href="https://github.com/vinibatista905"
          target="_blank"
        >
          <AiFillGithub />
        </a>
        <a
          className="Footer-Icon"
          href="https://twitter.com/v1n1san"
          target="_blank"
        >
          <AiOutlineTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
