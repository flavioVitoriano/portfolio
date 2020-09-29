import React from "react";
import { CardGroup, Container, Row, Col } from "reactstrap";
import PortfolioItem from "../../components/PortfolioItem";
import works from './data';

const MyWork = () => {
  return (
    <div id="my-work-section" className="content">
      <Container>
        <h1 className=" display-3">Meu Trabalho</h1>
        <hr />
        <CardGroup>
          <Row>
            {works.map((item) => 
              <Col sm={12} md={6} xl={4}><PortfolioItem {...item}/></Col>
              )}
          </Row>
        </CardGroup>
      </Container>
    </div>
  );
};

export default MyWork;
