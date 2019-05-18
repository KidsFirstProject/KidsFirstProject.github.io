import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import { shape, string } from 'prop-types';

const PartnerSection = ({ partner }) => {
  const { imageUrl, name, description, ctaUrl } = partner;
  return (
    <Row>
      <Col md className="d-flex justify-content-center align-items-center">
        <a href={ctaUrl}>
          <Image fluid src={imageUrl} />
        </a>
      </Col>
      <Col md className="d-flex justify-content-center align-items-center">
        <div>
          <h3>{name}</h3>
          <p>{description}</p>
          <Button variant="primary" href={ctaUrl}>
            Find Out More
          </Button>
        </div>
      </Col>
    </Row>
  );
};

PartnerSection.propTypes = {
  partner: shape({
    imageUrl: string.isRequired,
    name: string.isRequired,
    description: string.isRequired,
    ctaUrl: string.isRequired
  }).isRequired
};

export default PartnerSection;
