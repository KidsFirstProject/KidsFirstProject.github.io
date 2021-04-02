import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { arrayOf, string, shape } from 'prop-types';
import styles from './MemberCard.module.css';

const MemberCard = ({ member }) => {
  const { imageUrl, name, titles, description } = member;
  return (
    <Col lg={4} md={6}>
      <Card
        border="secondary"
        className={styles.memberCard}
        style={{ borderWidth: '4px' }}
      >
        <Card.Body className="d-flex flex-column align-items-center">
          <Image fluid src={imageUrl} className={styles.memberImage} />
          <Card.Title>{name}</Card.Title>
          {titles
            ? titles.map((title, index) => (
                <Card.Subtitle
                  className={styles.memberTitle}
                  key={`member-title-${index}`}
                >
                  {title}
                </Card.Subtitle>
              ))
            : ''}
          <Card.Text className={styles.memberDescription}>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

MemberCard.propTypes = {
  member: shape({
    imageUrl: string,
    name: string.isRequired,
    titles: arrayOf(string),
    description: string
  })
};

MemberCard.defaultProps = {
  member: shape({
    imageUrl: '',
    name: 'Anonymous',
    titles: [],
    description: 'Anonymous Member'
  })
};

export default MemberCard;
