import React from 'react';
import { Row, Col, ResponsiveEmbed } from 'react-bootstrap';
import styles from './KFPVideo.module.css';

const KFPVideo = () => (
  <Row className={styles.videoContainer}>
    <Col>
      <ResponsiveEmbed aspectRatio="16by9">
        <iframe
          title="Mission Video"
          src="https://www.youtube.com/embed/7xA_nM8q8gI"
          allowFullScreen
        />
      </ResponsiveEmbed>
    </Col>
  </Row>
);

export default KFPVideo;
