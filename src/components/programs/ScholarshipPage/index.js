import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ScholarshipPage = () => (
  <Container className="page-container">
    <h1>Scholarship Program</h1>
    <hr />
    <Row>
      <Col>
        <p>
          The Kids First Scholarship program provides one-time educational
          assistance for students experiencing homelessness in the Portland
          metro area. We strive to make opportunities available to those facing
          financial barriers, including but not limited to costs for:
          camps/seminars/conferences, equipment for creative pursuits, or summer
          programs. Ongoing needs such as utility costs, food costs, or medical
          care are not covered by this scholarship program, as the goal is to
          fund young people to follow their passions.
        </p>
        <p>
          Portland area students who meet the following guidelines can apply to
          our scholarship below. A parent/guardian can also apply on behalf of a
          student. We review applicants twice a year, the next submission
          deadline being November 1.
        </p>
        <ul>
          <li>Are a student or has a child in grades K-12</li>
          <li>Currently resides in the Portland metro area</li>
          <li>
            Currently experiencing homelessness as defined by the McKinney-Vento
            Act
          </li>
        </ul>
        <p>
          We rely on the support of people and businesses in our community who
          share our vision that every young person can access educational
          opportunities to reach their full potential. Please help us continue
          our scholarship program by making a donation{' '}
          <Link to="/donate">here</Link>. Every dollar counts!
        </p>
        <p>
          If you have any questions, ideas, or just want to talk, please reach
          out to our Scholarship Director, Ashley Lin at{' '}
          <a href="mailto:yuhsuanlin2003@gmail.com" target="_top">
            yuhsuanlin2003@gmail.com
          </a>
        </p>
        <p>
          Apply as a{' '}
          <Button
            href="https://goo.gl/forms/2177fGj8ht1bNW192"
            target="_blank"
            rel="noopener noreferrer"
          >
            Student
          </Button>{' '}
          <Button
            href="https://goo.gl/forms/UTU7c1zcDkwAodgZ2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Parent
          </Button>
        </p>
      </Col>
    </Row>
  </Container>
);

export default ScholarshipPage;
