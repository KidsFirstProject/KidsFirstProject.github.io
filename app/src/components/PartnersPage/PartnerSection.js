import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';

const PartnerSection = ({ partner }) => {
  const { imageUrl, name, description, ctaUrl } = partner;
  return (
    <Row>
      <Col lg={7} className="d-flex justify-content-center align-items-center">
        <a href={ctaUrl}>
          <Image fluid src={imageUrl} />
        </a>
      </Col>
      <Col lg={5} className="d-flex justify-content-center align-items-center">
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <Button variant="primary" href={ctaUrl}>Find Out More</Button>
        </div>
      </Col>
    </Row>
  )
};

export default PartnerSection;