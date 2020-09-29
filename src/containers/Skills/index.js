import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProgressIndicator from "../../components/ProgressIndicator";
import skills from "./constants/skills.json";
import "./styles.css";

const Skills = () => {
  return (
      <div className="content">
        <Container>
          <h1 className="display-3">Habilidades</h1>
          <hr />
          {skills.map(({ value, label, funnyLabel }) => (
            <Row>
              <Col sm={12} md={8} xs={10}>
                <ProgressIndicator value={value} label={label} />
              </Col>
              <Col sm={12} md={4} xs={2}>
                <div className="funny-label">{funnyLabel}</div>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
  );
};

export default Skills;
