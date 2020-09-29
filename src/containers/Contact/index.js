import React from "react";
import { Container, Row, Col } from "reactstrap";
import github from "../../assets/img/github.svg";
import linkedin from "../../assets/img/linkedin.svg";
import email from "../../assets/img/email.svg";

const Contact = () => {
  return (
    <div id="contact-section" className="content">
      <div>
        <Container>
          <h1 className=" display-3">Contato</h1>
          <hr />

          <Row>
            <Col>
              <a href="https://www.github.com/flavioVitoriano">
              <img alt="github logo" class="img" width={100} height={100} src={github} />
              </a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/in/fl%C3%A1vio-vitoriano-28b6a41b0/">
              <img alt="linkedin logo" class="img" width={100} height={100} src={linkedin}></img>
              </a>
            </Col>
            <Col>
              <a href="mailto:flavio.vitorianodev@gmail.com">
            <img alt="email logo" class="img" width={100} height={100} src={email}></img>
            </a>
          </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
