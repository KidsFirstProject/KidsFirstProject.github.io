import React from 'react';
import { Container, Col, Row, Image, CardColumns, Card } from 'react-bootstrap';
import MemberCard from './MemberCard';
import styles from './TeamPage.module.css';
import teamImage from '../../assets/images/chapters/portland-or/hfh06.jpg';
import directors from '../../data/team/directors';
import volunteerLeaders from '../../data/team/volunteer-leaders';
import advisors from '../../data/team/advisors';
import sponsors from '../../data/team/sponsors';
import partners from '../../data/team/partners';

const TeamPage = () => (
  <Container className="page-container">
    <h1>Our Team</h1>
    <hr />
    <Row>
      <Col lg>
        <Image fluid src={teamImage} rounded />
      </Col>
      <Col className="d-flex flex-column justify-content-center">
        <h2>Who we are</h2>
        <p>
          We’re a group of individuals passionate about social justice and youth
          empowerment who have come together to bridge the gap between a child
          experiencing homelessness and the resources needed to help them reach
          their full potential.
        </p>
      </Col>
    </Row>
    <Row className={styles.teamSection}>
      <Col>
        <h2>Board of Directors</h2>
      </Col>
    </Row>
    <hr />
    <Row>
      {directors.map(director => (
        <MemberCard member={director} />
      ))}
    </Row>
    <Row className={styles.teamSection}>
      <Col>
        <h2>Volunteer Leaders</h2>
      </Col>
    </Row>
    <hr />
    <Row>
      {volunteerLeaders.map(leader => (
        <MemberCard member={leader} />
      ))}
    </Row>
    <Row className={styles.teamSection}>
      <Col>
        <h2>Advisory Board</h2>
      </Col>
    </Row>
    <hr />
    <Row>
      {advisors.map(advisor => (
        <MemberCard member={advisor} />
      ))}
    </Row>
    <Row className={styles.teamSection}>
      <Col>
        <h2>Our Sponsors</h2>
      </Col>
    </Row>
    <hr />
    <Row>
      <CardColumns>
        {sponsors.map(imageUrl => (
          <Card border="secondary">
            <Card.Img fluid className="p-3" src={imageUrl} />
          </Card>
        ))}
      </CardColumns>
    </Row>
    <Row className={styles.teamSection}>
      <Col>
        <h2>Our Partners</h2>
      </Col>
    </Row>
    <hr />
    <Row>
      <CardColumns>
        {partners.map(({ imageUrl, ctaUrl }) => (
          <Card border="secondary">
            <a href={ctaUrl}>
              <Card.Img fluid className="p-3" src={imageUrl} />
            </a>
          </Card>
        ))}
      </CardColumns>
    </Row>
  </Container>
);

export default TeamPage;
