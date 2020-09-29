import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavLink,
} from "reactstrap";
import "./style.css";
import Scrollspy from "react-scrollspy";

const PortfolioNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bg, setBg] = useState("transparent");
  const toggle = () => setIsOpen(!isOpen);

  const handleScroll = (e) => {
    if (window.scrollY > 50) setBg("dark");
    else setBg("transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar fixed="top" className="navbar" color={bg} dark expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="navbar navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <Scrollspy
              items={["about-me", "skills", "my-work", "contact"]}
              currentClassName="nav-active"
              className="justify-content-center mx-auto navbar-nav"
              offset={-10}
            >
            <li className="nav-item">
              <NavLink href="#about-me">Sobre mim</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#skills">Habilidades</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#my-work">Meu Trabalho</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="#contact">Contato</NavLink>
            </li>
            </Scrollspy>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default PortfolioNav;
