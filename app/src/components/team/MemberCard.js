import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import styles from './MemberCard.module.css';

const MemberCard = ({ member }) => {
  const { imageUrl, name, titles, description } = member;
  return (
    <Col lg={4}>
      <Card border="secondary" className={styles.memberCard} style={{ borderWidth: '4px' }}>
        <Card.Body className="d-flex flex-column align-items-center">
          <Image fluid src={imageUrl} className={styles.memberImage} />
          <Card.Title>{name}</Card.Title>
          {
            titles
            ? titles.map(title => (
              <Card.Subtitle className={styles.memberTitle}>{title}</Card.Subtitle>
            ))
            : ''
          }
          <Card.Text className={styles.memberDescription}>
            { description }
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default MemberCard;