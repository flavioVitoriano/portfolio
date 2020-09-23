import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import AboutMe from "./containers/AboutMe";
import Skills from "./containers/Skills";
import MyWork from "./containers/MyWork";
import Contact from "./containers/Contact";
import Bounce from "react-reveal/Bounce";
import { Row, Col, Container } from "reactstrap";
import { Events, scrollSpy } from "react-scroll";

function App() {
  useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {});
    Events.scrollEvent.register("end", function (to, element) {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Container>
        <Row>
          <Col md={12} xs={12} className="mx-auto">
            <Bounce left>
              <AboutMe />
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12} className="mx-auto">
            <Bounce left>
              <Skills />
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12} className="mx-auto">
            <Bounce left>
              <MyWork />
            </Bounce>
          </Col>
        </Row>
        <Row>
          <Col md={12} xs={12} className="mx-auto">
            <Bounce left>
              <Contact />
            </Bounce>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
