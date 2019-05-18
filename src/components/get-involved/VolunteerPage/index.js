import React from 'react';
import {
  Container,
  Col,
  Row,
  Image,
  Button,
  Card,
  ResponsiveEmbed
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import signUpImage from '../../../assets/images/shelter/shelter003.jpg';
import styles from './VolunteerPage.module.css';

const VolunteerPage = () => (
  <Container className="page-container">
    <h1>Volunteer</h1>
    <hr />
    <Row>
      <Col md className="d-flex flex-column justify-content-center align-items-center">
        <Card className={styles.card}>
          <Card.Header className={styles.cardHeader}>
            <h3 className="text-center">Already a Volunteer?</h3>
          </Card.Header>
          <Card.Body>
            <Card.Text className="text-center">
              <p>Sign up for a shift here!</p>
              <a
                href="http://www.signupgenius.com/go/30e0c4faeaf2fa5f94-kids"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="http://www.SignUpGenius.com/images/SignUpGenius-wide.gif" />
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md className="d-flex align-items-center">
        <Image src={signUpImage} fluid rounded />
      </Col>
    </Row>
    <hr className={styles.sectionDivider} />
    <Row>
      <Col md className="d-flex flex-column justify-content-center">
        <h2>Why volunteer?</h2>
        <p>
          Our entire program is run by volunteers, from the creation of our
          program books to the design of our logo. Without our dedicated
          volunteers, Kids First Project would not be able to impact the many
          children we serve. You will be giving us the biggest gift of all by
          volunteering your time to our organization. Whether you’re interested
          in interacting with children through programs or you’re interested in
          the background work, your impact makes all the difference.
        </p>
      </Col>
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <Card className={styles.card}>
          <Card.Header className={styles.cardHeader}>
            <h3 className="text-center">How to volunteer</h3>
          </Card.Header>
          <Card.Body>
            <Card.Text>
              <div>
                <p>To become a volunteer you must:</p>
                <ul>
                  <li>Fill out and submit the online application form</li>
                  <li>
                    Attend an in-person orientation at your local shelter(s)
                  </li>
                  <li>
                    Complete a short online orientation about our organization
                    (Attending in person orientation at shelter is highly
                    recommended)
                  </li>
                </ul>
              </div>
              <Button href="https://docs.google.com/forms/d/120QCcvp0nclc3Is8XMjf9XR7Mk5VwYx_I9CWe7YqaSU/viewform">
                <FontAwesomeIcon icon={faPen} color="white" /> Apply Now
              </Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <hr className={styles.sectionDivider} />
    <Row>
      <Col className="d-flex flex-column justify-content-center align-items-center">
        <h3>New Volunteer Orientation Powerpoint</h3>
        <ResponsiveEmbed aspectRatio="16by9">
          <iframe
            title="New Volunteer Orientation Powerpoint"
            src="https://docs.google.com/presentation/d/1vyZS36uuGONWKj2Z1RYETjuxyH_0gwyFmz3rAxh7ZLE/embed?start=false&amp;loop=true&amp;delayms=10000"
            allowFullScreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          />
        </ResponsiveEmbed>
      </Col>
    </Row>
  </Container>
);

export default VolunteerPage;
