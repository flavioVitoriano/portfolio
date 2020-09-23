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
} from "reactstrap";
import './styles.css';

const PortfolioItem = ({ thumbnail, title, alt }) => {
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
          <Button block color="dark">Ver</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default PortfolioItem;
