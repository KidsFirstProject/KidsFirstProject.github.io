import React, { useState } from 'react';
import { Card, Col, Image, Collapse, Button } from 'react-bootstrap';
import { string, shape } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from './FellowCard.module.css';

const FellowCard = ({ fellow }) => {
  const { imageUrl, name, biography } = fellow;
  const [ biographyOpen, setBiographyOpen ] = useState(false);
  return (
    <Col lg={4} md={6}>
      <Card
        border="secondary"
        className={styles.fellowCard}
        style={{ borderWidth: '4px' }}
      >
        <Card.Body className="d-flex flex-column align-items-center">
          <Image fluid src={imageUrl} className={styles.fellowImage} />
          <Card.Title>{name}</Card.Title>
          <Collapse in={biographyOpen}>
            <Card.Text className={styles.fellowBiography}>
              {biography}
            </Card.Text>
          </Collapse>
          <Button variant="light" block className={styles.biographyButton} onClick={() => setBiographyOpen(!biographyOpen)}>
              <FontAwesomeIcon icon={biographyOpen ? faChevronUp : faChevronDown} color="#60CCCC" />
            </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

FellowCard.propTypes = {
  fellow: shape({
    imageUrl: string.isRequired,
    name: string.isRequired,
    biography: string.isRequired
  })
};

export default FellowCard;
