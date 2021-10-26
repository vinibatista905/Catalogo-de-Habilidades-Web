import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-section-1">
        <h2 className="hero-title">O Seu Catálogo de Habilidades</h2>
        <p className="hero-desc">
          Registre-se em poucos passos e comece agora mesmo a criar o seu
          catálogo de habilidades! Você pode compartilhar o seu e ver o catálogo
          de outras pessoas. Comece agora mesmo!
        </p>
        <div className="btn-wrap">
          <a href="/register">
            <button className="hero-btn-1">Registrar-se</button>
          </a>
          <a href="/login">
            <button className="hero-btn-2">Login</button>
          </a>
        </div>
      </div>
      <div className="hero-section-2">
        <img
          className="hero-img"
          src={require("../../../assets/hero-2.png").default}
        />
      </div>
    </div>
  );
};

export default Hero;
