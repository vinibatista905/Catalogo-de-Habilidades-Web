import React from "react";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-section-1">
        <h2 className="hero-title">O Seu Catálogo de Habilidades</h2>
        <p className="hero-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          saepe quod placeat exercitationem nesciunt rem quas possimus eum
          dignissimos numquam ducimus ullam? Eius fugiat incidunt sint tenetur
          asperiores quis dolor?
        </p>
        <div className="btn-wrap">
          <button className="hero-btn-1">Registrar-se
            <a href="/register"/>
          </button>
          <button className="hero-btn-2">Login
            <a href="/login"/>
          </button>
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
