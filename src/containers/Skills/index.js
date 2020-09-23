import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProgressIndicator from "../../components/ProgressIndicator";
import skills from "./constants/skills.json";
import { Element } from "react-scroll";
import "./styles.css";

const Skills = () => {
  return (
    <Element name="skills" className="element">
      <div className="section">
        <Container>
          <h1 className="display-3">Habilidades</h1>
          <hr />
          {skills.map(({ value, label, funnyLabel }) => (
            <Row>
              <Col md={8} xs={8}>
                <ProgressIndicator value={value} label={label} />
              </Col>
              <Col md={4} xs={4}>
                <div className="funny-label">{funnyLabel}</div>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </Element>
  );
};

export default Skills;
