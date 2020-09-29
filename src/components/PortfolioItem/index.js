import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader, UncontrolledCarousel
} from "reactstrap";
import './styles.css';

const PortfolioItem = ({ thumbnail, title, alt, description, items, used }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="portfolio-item">
      <Card>
        <CardImg
          top
          width="100%"
          height={200}
          src={thumbnail}
          alt={alt}
        />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <Button block color="dark" onClick={toggle}>Ver</Button>
        </CardBody>
      </Card>
      <Modal isOpen={isOpen} toggle={toggle} size="xl">
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
        <div className="portfolio-item-slide">
          <UncontrolledCarousel items={items} />
        </div>
          {description}
          <br />
          <br />
          Tecnologias usadas: {used.map(item => <b>{item}   </b>)}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" block onClick={toggle}>Fechar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PortfolioItem;
