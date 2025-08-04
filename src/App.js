import React, { useState } from "react";
import { Card, Button, Container, Row, Col, OverlayTrigger, Popover, Badge, Modal, Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Assuming background image is defined here

const vibgyorPalette = [
  "#FF0000", // Red
  "#EE82EE", // Violet
  "#8A2BE2", // Indigo
  "#00BFFF", // Blue
  "#32CD32", // Green
  "#FFFF00", // Yellow
  "#FFA500", // Orange
  "#FF4500"  // Red-Orange
];

const commonScents = ["British Rose", "Lavender", "Orange & Lemongrass"];

const candles = [
  {
    name: "Tide of Roses",
    price: "₹450",
    image: process.env.PUBLIC_URL + "/candles/tide_of_roses.jpeg",
    colors: vibgyorPalette
  },
  {
    name: "Daisy Delight",
    price: "₹220",
    image: process.env.PUBLIC_URL + "/candles/daisy_delight.jpeg",
    colors: vibgyorPalette
  },
  {
    name: "Floral Chic Cup",
    price: "₹200",
    image: process.env.PUBLIC_URL + "/candles/floral_chic_cup.jpeg",
    colors: vibgyorPalette
  },
  {
    name: "Glow Goals",
    price: "₹200",
    image: process.env.PUBLIC_URL + "/candles/glow_goals.jpeg",
    colors: vibgyorPalette
  },
  {
    name: "Lotus Whisper",
    price: "₹200",
    image: process.env.PUBLIC_URL + "/candles/lotus_whisper.jpeg",
    colors: vibgyorPalette
  },
  {
    name: "Mini Green Garden",
    price: "₹80",
    image: process.env.PUBLIC_URL + "/candles/mini_green_garden.jpeg",
    colors: vibgyorPalette
  },
  {
    name: "Pastel Petals",
    price: "₹110",
    image: process.env.PUBLIC_URL + "/candles/pastel_petals.jpeg",
    colors: vibgyorPalette
  },
  {
    name: "Rosemary",
    price: "₹430",
    image: process.env.PUBLIC_URL + "/candles/rosemary.jpeg",
    colors: vibgyorPalette
  },
  {
    name: "Tulip In A Jar",
    price: "₹270",
    image: process.env.PUBLIC_URL + "/candles/tulip_in_a_jar.jpeg",
    colors: vibgyorPalette
  }
];

const CandleCard = ({ candle }) => {
  const [showModal, setShowModal] = useState(false);

  const popover = (
    <Popover id="popover-basic" placement="bottom">
      <Popover.Header as="h3">Available Fragrances</Popover.Header>
      <Popover.Body>
        <ul className="mb-0">
          {commonScents.map((scent, idx) => (
            <li key={idx}>{scent}</li>
          ))}
        </ul>
      </Popover.Body>
    </Popover>
  );

  return (
    <Card className="h-100 shadow-sm">
      <div style={{ height: "250px", overflow: "hidden", cursor: "pointer" }} onClick={() => setShowModal(true)}>
        <Card.Img 
          variant="top" 
          src={candle.image} 
          alt={candle.name} 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
        />
      </div>

      <Card.Body>
        <Card.Title className="text-danger">{candle.name}</Card.Title>
        <Card.Text><strong>Price:</strong> {candle.price}</Card.Text>

        <div className="mt-2">
          <div className="fw-bold mb-2">Colors Available:</div>
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div className="d-grid gap-2" style={{ gridTemplateColumns: "repeat(4, auto)", display: "grid" }}>
              {candle.colors.map((color, i) => (
              <span 
              key={i} 
              className="color-badge"
              style={{ backgroundColor: color }}
              ></span>
              ))}
            </div>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover} rootClose>
              <Button variant="outline-secondary" size="sm">Available in Fragrances</Button>
            </OverlayTrigger>
          </div>
        </div>

      <Button
      variant="success"
      className="mt-2 w-100"
      as="a"
      href="https://wa.me/919997733961?text=Hi%20Zephyr%20Aroma%2C%20I%20am%20interested%20in%20your%20candles!"
      target="_blank"
      rel="noopener noreferrer"
      >
      Enquire
      </Button>

      </Card.Body>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Body className="p-0 position-relative">
          <Button 
            variant="light" 
            onClick={() => setShowModal(false)} 
            className="position-absolute top-0 end-0 m-2 border"
          >
            &times;
          </Button>
          <img src={candle.image} alt={candle.name} style={{ width: "100%", height: "auto" }} />
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default function ZephyrAromaCatalog() {
  return (
    <div className="catalog-page" style={{ backgroundImage: 'url("/backgrounds/bg.jpg")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
      <header className="bg-light text-center py-5 border-bottom">
        <img src= {`${process.env.PUBLIC_URL}/candles/zephyraroma_logo.png`} alt="Zephyr Aroma Logo" style={{ height: 80 }} className="mb-3" />
        <h1 className="display-4 text-danger fw-bold">Zephyr Aroma</h1>
        <p className="lead text-muted">Handcrafted Scented Candles for Every Mood</p>
      </header>

      <Container className="my-5">
        <h2 className="text-center mb-4 text-danger">Our Candle Catalog</h2>
        <Row xs={1} sm={2} md={3} className="g-4">
          {candles.map((candle, index) => (
            <Col key={index}>
              <CandleCard candle={candle} />
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="bg-light text-center py-4 border-top text-muted">
    <div className="mb-2">
      <a
        href="https://www.instagram.com/zephyr_aroma/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-danger"
      >
        Follow us on Instagram
      </a>
    </div>
    &copy; {new Date().getFullYear()} Zephyr Aroma. All rights reserved.
    </footer>
    </div>
  );
}