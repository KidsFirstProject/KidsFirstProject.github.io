import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import advocacyPoster from '../../assets/images/programs/advocacy.png';

const AdvocacyPage = () => (
  <Container className="page-container">
    <h1>Summer Advocacy Fellowship</h1>
    <hr />
    <Row>
      <Col className="text-center">
        <Image fluid src={advocacyPoster} />
      </Col>
    </Row>
  </Container>
);

export default AdvocacyPage;
