import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import styles from './KFPFooter.module.css';

const KFPFooter = () => (
  <Row>
    <Col>
      <Container className={styles.footerContainer}>
        <p className="text-center">Copyright &copy; Kid First Project {new Date().getFullYear()}</p>
      </Container>
    </Col>
  </Row>
);

export default KFPFooter;