import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import AboutMe from "./containers/AboutMe";
import Skills from "./containers/Skills";
import MyWork from "./containers/MyWork";
import Contact from "./containers/Contact";
import Bounce from "react-reveal/Bounce";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <main>
        <section className="section" id="about-me">
          <Bounce left>
            <AboutMe />
          </Bounce>
        </section>
        <section className="section" id="skills">
          <Bounce right>
            <Skills />
          </Bounce>
        </section>
        <section className="section" id="my-work">
          <Bounce left>
            <MyWork />
          </Bounce>
        </section>
        <section className="section" id="contact">
          <Bounce right>
            <Contact />
          </Bounce>
        </section>
      </main>
    </div>
  );
}

export default App;
