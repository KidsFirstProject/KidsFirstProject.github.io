import React from 'react';
import { Container, Col, Row, Media } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const ContactPage = () => (
  <Container className="page-container">
    <h1>Contact Us</h1>
    <hr />
    <Row>
      <Col>
        <Media>
          <a href="mailto:office@kidsfirstproject.org">
            <span className="fa-layers fa-fw fa-4x">
              <FontAwesomeIcon icon={faSquare} color="#60CCCC"/>
              <FontAwesomeIcon icon={faEnvelope} color="white" transform="shrink-6"/>
            </span>
          </a>
          <Media.Body>
            <h5>Office</h5>
            <p>office@kidsfirstproject.org</p>
          </Media.Body>
        </Media>
      </Col>
      <Col>
        <Media>
          <a href="tel:971-800-1243">
            <span className="fa-layers fa-fw fa-4x">
              <FontAwesomeIcon icon={faSquare} color="#60CCCC"/>
              <FontAwesomeIcon icon={faPhone} color="white" transform="shrink-6"/>
            </span>
          </a>
          <Media.Body>
            <h5>Phone</h5>
            <p>971.800.1243</p>
          </Media.Body>
        </Media>
      </Col>
      <Col>
        <Media className="d-flex flex-row align-items-center">
          <a href="https://github.com/KidsFirstProject/KidsFirstProject.github.io/issues">
            <span className="fa-layers fa-fw fa-4x">
              <FontAwesomeIcon icon={faSquare} color="#60CCCC"/>
              <FontAwesomeIcon icon={faGithub} color="white" transform="shrink-6"/>
            </span>
          </a>
          <Media.Body className="d-flex flex-column justify-content-center">
            <h5>Website Issues</h5>
            <p>Create an issue on our <a href="https://github.com/KidsFirstProject/KidsFirstProject.github.io/issues">Github repo</a>.</p>
          </Media.Body>
        </Media>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col md={12}>
        <h2>Follow us:</h2>
      </Col>
      <Col>
        <Media className="d-flex flex-row align-items-center">
          <a href="http://facebook.com/kidsfirstproject">
            <span className="fa-layers fa-fw fa-4x">
              <FontAwesomeIcon icon={faSquare} color="#60CCCC"/>
              <FontAwesomeIcon icon={faFacebook} color="white" transform="shrink-6"/>
            </span>
          </a>
          <Media.Body>
            <h5>Kids First Project</h5>
          </Media.Body>
        </Media>
      </Col>
      <Col>
        <Media className="d-flex flex-row align-items-center">
          <a href="http://instagram.com/kidsfirstproject">
            <span className="fa-layers fa-fw fa-4x">
              <FontAwesomeIcon icon={faSquare} color="#60CCCC"/>
              <FontAwesomeIcon icon={faInstagram} color="white" transform="shrink-6"/>
            </span>
          </a>
          <Media.Body>
            <h5>@KidsFirstProject</h5>
          </Media.Body>
        </Media>
      </Col>
      <Col>
        <Media className="d-flex flex-row align-items-center">
          <a href="http://twitter.com/pdxkidsfirst">
            <span className="fa-layers fa-fw fa-4x">
              <FontAwesomeIcon icon={faSquare} color="#60CCCC"/>
              <FontAwesomeIcon icon={faTwitter} color="white" transform="shrink-6"/>
            </span>
          </a>
          <Media.Body>
            <h5>@PDXKidsFirst</h5>
          </Media.Body>
        </Media>
      </Col>
    </Row>
    <hr />
  </Container>
);

export default ContactPage;