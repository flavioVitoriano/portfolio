import React from "react";
import { CardGroup, Container, Row, Col } from "reactstrap";
import PortfolioItem from "../../components/PortfolioItem";
import back2 from "../../assets/img/back2.jpg";

const MyWork = () => {
  return (
    <div id="my-work-section" className="content">
      <Container>
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
  );
};

export default MyWork;
