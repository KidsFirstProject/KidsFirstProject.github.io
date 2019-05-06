import React from 'react';
import { Container, Col, Row, Image, CardColumns, Card } from 'react-bootstrap';
import MemberCard from './MemberCard';
import styles from './TeamPage.module.css';
import teamImage from '../../assets/images/chapters/portland-or/hfh06.jpg';
import directors from './members/directors';
import volunteerLeaders from './members/volunteer-leaders';
import advisors from './members/advisors';
import sponsors from './members/sponsors';

const TeamPage = () => (
  <Container className="page-container">
    <h1>Our Team</h1>
    <hr/>
    <Row>
      <Col>
        <Image fluid src={teamImage} rounded />
      </Col>
      <Col className="d-flex flex-column justify-content-center">
        <h2>Who we are</h2>
        <p>We’re a group of individuals passionate about social justice and youth empowerment who have come together to bridge the gap between a child experiencing homelessness and the resources needed to help them reach their full potential.</p>
      </Col>
    </Row>
    <Row className={styles.teamSection}>
      <h2>Board of Directors</h2>
    </Row>
    <hr/>
    <Row>
      {
        directors.map(director => (
          <MemberCard member={director} />
        ))
      }
    </Row>
    <Row className={styles.teamSection}>
      <h2>Volunteer Leaders</h2>
    </Row>
    <hr/>
    <Row>
      {
        volunteerLeaders.map(leader => (
          <MemberCard member={leader} />
        ))
      }
    </Row>
    <Row className={styles.teamSection}>
      <h2>Advisory Board</h2>
    </Row>
    <hr/>
    <Row>
      {
        advisors.map(advisor => (
          <MemberCard member={advisor} />
        ))
      }
    </Row>
    <Row className={styles.teamSection}>
      <h2>Our Sponsors</h2>
    </Row>
    <hr/>
    <Row>
      <CardColumns>
        {
          sponsors.map(imageUrl => (
            <Card border="secondary">
              <Card.Img fluid className='p-3' src={imageUrl} />
            </Card>
          ))
        }
      </CardColumns>
    </Row>
  </Container>
);

export default TeamPage;