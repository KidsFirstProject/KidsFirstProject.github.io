import React from 'react';
import { Container } from 'react-bootstrap';
import PartnerSection from './PartnerSection';
import partnerList from '../../data/partners/partnerList';
import styles from './PartnersPage.module.css';

const PartnersPage = () => (
  <Container className="page-container">
    <h1>Our Partners</h1>
    <hr />
    {
      partnerList.map(partner => ([
        <PartnerSection partner={partner} />,
        <hr className={styles.sectionDivider} />
      ]))
    }
  </Container>
);

export default PartnersPage;