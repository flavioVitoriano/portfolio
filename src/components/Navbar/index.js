import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-scroll";
import "./style.css";

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
          <Nav navbar className="justify-content-center mx-auto">
            <NavItem>
              <NavLink
                tag={Link}
                activeClass="nav-active"
                to="about-me"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                href="#about-me"
              >
                Sobre mim
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                activeClass="nav-active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                href="#skills"
              >
                Habilidades
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                activeClass="nav-active"
                to="my-work"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                href="#my-work"
              >
                Meu Trabalho
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                activeClass="nav-active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                href="#contact"
              >
                Contato
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default PortfolioNav;
