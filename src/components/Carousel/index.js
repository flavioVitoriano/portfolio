import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import backgroundImage from "../../assets/img/back1.gif";
import './style.css';

const items = [
  {
    src: backgroundImage,
    altText: "person-description",
    caption: "Bem vindo a minha pagina",
    header: "Ola, sou Flavio Vitoriano",
    key: "1",
  },
];

const PortfolioCarousel = () => {
  return (
    <div className="carousel-portfolio">
      <UncontrolledCarousel items={items} />
    </div>
  );
};

export default PortfolioCarousel;
