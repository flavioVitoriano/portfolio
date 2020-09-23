import React from "react";
import { CardGroup, Container, Row, Col } from "reactstrap";
import PortfolioItem from "../../components/PortfolioItem";
import back2 from "../../assets/img/back2.jpg";
import { Element } from "react-scroll";

const MyWork = () => {
  return (
    <Element name="my-work" className="element">
        <div id="my-work-section" className="section">
          <Container fluid>
            <h1 className=" display-3">Meu Trabalho</h1>
            <hr />
            <CardGroup>
              <Row>
                <Col className="mx-0">
                  <PortfolioItem thumbnail={back2} title="Eletivas PRO" />
                </Col>
                <Col className="mx-0">
                  <PortfolioItem thumbnail={back2} title="Eletivas PRO" />
                </Col>
                <Col className="mx-0">
                  <PortfolioItem thumbnail={back2} title="Eletivas PRO" />
                </Col>
              </Row>
            </CardGroup>
          </Container>
        </div>
    </Element>
  );
};

export default MyWork;
