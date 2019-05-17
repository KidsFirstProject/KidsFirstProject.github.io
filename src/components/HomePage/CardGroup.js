import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './CardGroup.module.css';
import aboutImage from '../../assets/images/shelter/shelter005.jpg';
import teamImage from '../../assets/images/shelter/shelter020.jpg';
import programImage from '../../assets/images/shelter/shelter001.jpg';

const cards = [
  {
    imageUrl: aboutImage,
    title: 'What is Kids First Project?',
    text:
      'Kids First Project is a 501(c)(3) non-profit organization that brings programs and services to homeless youth living in shelters.',
    ctaLink: '/about',
    ctaText: 'Learn More'
  },
  {
    imageUrl: teamImage,
    title: 'Mission Statement',
    text:
      'Our mission is to empower youth experiencing homelessness to reach their full potential and help break the generational cycle of poverty.',
    ctaLink: '/team',
    ctaText: 'Meet the Team'
  },
  {
    imageUrl: programImage,
    title: 'What We Do',
    text:
      'We offer in-shelter educational and recreational programs, a Scholarship Program, and additional service and advocacy opportunities.',
    ctaLink: '/programs/inshelter',
    ctaText: 'Find Programs'
  }
];

const CardGroup = () => (
  <Row className={styles.groupContainer}>
    {cards.map(({ imageUrl, title, text, ctaLink, ctaText }) => (
      <Col>
        <Card style={{ border: 'none' }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <LinkContainer to={ctaLink}>
              <Button variant="primary">{ctaText}</Button>
            </LinkContainer>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default CardGroup;
