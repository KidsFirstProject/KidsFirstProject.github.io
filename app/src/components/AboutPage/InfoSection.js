import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';

const InfoSection = ({ imageUrl, title, text }) => (
  <Row>
    <Col>
      <Image src={imageUrl} fluid rounded/>
    </Col>
    <Col className="d-flex flex-column justify-content-center">
      <h2>
        {title}
      </h2>
      <p>
        {text}
      </p>
    </Col>
  </Row>
);

export default InfoSection;