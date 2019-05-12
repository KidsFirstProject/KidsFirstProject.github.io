import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import PrimaryTabs from './PrimaryTabs';
import ProgramList from './ProgramList';
import headerImage from '../../../assets/images/shelter/shelter016.jpg';

const InShelter = () => (
  <Container className="page-container">
    <h1>In-Shelter Services</h1>
    <hr />
    <Row>
      <Col lg={4} className="d-flex align-items-center">
        Our in-shelter services are an affordable and convenient way for youth experiencing homelessness to participate in extracurricular activities while in shelter. We also provide our volunteers, local community groups, and individuals the opportunity to turn their interests into a teachable curriculum to bring to the kids we serve in shelters. In the past, we have taught poetry classes created by a university student and lacrosse workshops led by a high school girls lacrosse team.
      </Col>
      <Col>
        <Image fluid rounded src={headerImage} />
      </Col>
    </Row>
    <br />
    <Row>
      <h2>Primary Programs</h2>
    </Row>
    <hr />
    <PrimaryTabs />
    <br />
    <Row>
      <h2>Program List</h2>
    </Row>
    <hr />
    <ProgramList />
  </Container>
);

export default InShelter;