import React from "react";
import { Container } from "reactstrap";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact" className="element">
      <div id="contact-section" className="section">
        <div>
          <Container fluid>
            <h1 className=" display-3">Contato</h1>
            <hr />
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              luctus metus massa, sit amet varius arcu vulputate eget. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Praesent condimentum molestie dui, id mollis
              nunc posuere nec. Sed congue ante quis erat luctus porta. Donec
              vel pellentesque lectus, ut convallis dolor. Phasellus ultricies
              rutrum mauris, nec tempor risus gravida vel. Quisque congue ante
              vitae euismod tincidunt. Duis nisi ex, tristique in nisi at,
              tempus ornare metus. Pellentesque vestibulum purus at lectus
              rhoncus interdum. Duis at libero euismod, viverra tellus a,
              tristique justo.
            </p>
          </Container>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
