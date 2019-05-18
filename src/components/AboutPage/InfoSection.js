import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import { string } from 'prop-types';

const InfoSection = ({ imageUrl, title, text }) => (
  <Row>
    <Col lg className="d-flex flex-column justify-content-center">
      <Image src={imageUrl} fluid rounded />
    </Col>
    <Col className="d-flex flex-column justify-content-center">
      <h2>{title}</h2>
      <p>{text}</p>
    </Col>
  </Row>
);

InfoSection.propTypes = {
  imageUrl: string.isRequired,
  title: string.isRequired,
  text: string.isRequired
};

export default InfoSection;
