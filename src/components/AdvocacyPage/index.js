import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FellowCard from './FellowCard';
import fellows2019 from '../../data/advocacy/2019';

const AdvocacyPage = () => (
  <Container className="page-container">
    <h1>Summer Advocacy Fellowship</h1>
    <hr />
    <Row>
      <Col>
        <p>
          The Kids First Project Summer Advocacy Fellowship provides current and
          former youth experiencing homelessness with a platform to share their
          stories and be heard. They will participate in a two-day workshop in
          Portland, OR, learning about their rights and how to engage in
          effective advocacy from guest speakers, and then researching and
          crafting pitches and one-pagers. The fellowship will culminate in a
          four-day trip to Washington, D.C., where the fellows will meet with
          their legislators on Capitol Hill, sharing their stories and calls to
          action.
        </p>
      </Col>
    </Row>
    <Row>
      <h2>2019 Fellows</h2>
    </Row>
    <hr />
    <Row>
      {fellows2019.map(fellow => (
        <FellowCard fellow={fellow} />
      ))}
    </Row>
    <Row>
      <h2>Summer Advocacy Blog</h2>
    </Row>
    <hr />
    <Row>
      <LinkContainer exact to="/advocacy/blog">
        <Button variant="primary">Read Posts</Button>
      </LinkContainer>
    </Row>
  </Container>
);

export default AdvocacyPage;
