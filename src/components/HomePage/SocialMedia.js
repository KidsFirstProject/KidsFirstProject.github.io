import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faInstagram,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';
import styles from './SocialMedia.module.css';

const iconColor = '#60CCCC';

const SocialMedia = () => (
  <Row>
    <Col
      className={`d-flex flex-row justify-content-center ${
        styles.mediaContainer
      }`}
    >
      <div className="p-4">
        <a href="https://www.facebook.com/kidsfirstproject">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="4x"
            color={iconColor}
          />
        </a>
      </div>
      <div className="p-4">
        <a href="http://instagram.com/kidsfirstproject">
          <FontAwesomeIcon icon={faInstagram} size="4x" color={iconColor} />
        </a>
      </div>
      <div className="p-4">
        <a href="https://twitter.com/pdxkidsfirst">
          <FontAwesomeIcon icon={faTwitterSquare} size="4x" color={iconColor} />
        </a>
      </div>
    </Col>
  </Row>
);

export default SocialMedia;
