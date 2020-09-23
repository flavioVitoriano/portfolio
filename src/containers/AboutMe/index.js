﻿import React from "react";
import { Container, Row, Col } from "reactstrap";
import profileimg from "../../assets/img/profile.jpg";
import resume from "../../constants/resume.json";
import { Element } from "react-scroll";
import "./styles.css";

const AboutMe = () => {
  return (
    <Element name="about-me" className="element">
      <div id="about-me-section" className="section">
        <Container fluid>
          <h1 className=" display-3">Sobre mim</h1>
          <hr />
          <Row>
            <Col md={9} xs={9}>
              <div className="lead paper">
                <div className="lines">
                  <p className="text">{resume.about_me}</p>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <img
                  className="profile-img rounded-5 mx-auto d-block"
                  src={profileimg}
                  width={150}
                  height={150}
                  alt="profile"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Element>
  );
};

export default AboutMe;
