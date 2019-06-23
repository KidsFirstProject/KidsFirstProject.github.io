import React from 'react';
import { Container, Col, Row, Button, Media } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FellowCard from './FellowCard';
import fellows2019 from '../../data/advocacy/2019';
import { recentPosts } from '../../data/advocacy/blog';
import iconMap from '../BlogList/iconMap';

const AdvocacyPage = () => (
  <Container className="page-container">
    <h1>Summer Advocacy Fellowship</h1>
    <hr />
    <Row>
      <Col lg={8}>
        <p>
          The Kids First Project Summer Advocacy Fellowship provides current and
          former youth experiencing homelessness with a platform to share their
          stories and be heard. They will participate in a two-day workshop in
          Portland, OR, learning about their rights and how to engage in
          effective advocacy from guest speakers, and then researching and
          crafting pitches and one-pagers. The fellowship will culminate in a
          four-day trip to Washington, D.C., where the fellows will meet with
          their legislators on Capitol Hill, sharing their stories and calls to
          action.
        </p>
      </Col>
      <Col>
        <h2>Summer Advocacy Blog</h2>
        {recentPosts.map(({ title, publishDate, type, id }) => (
          <Media>
            <FontAwesomeIcon icon={iconMap[type]} size="4x" color="#60CCCC" />
            <Media.Body>
              <Container>
                <Link to={`advocacy/blog/post/${id}`}>
                  <h5>{title}</h5>
                </Link>
                <p>{moment(publishDate, 'YYYY-MM-DD').format('MMM Do Y')}</p>
              </Container>
            </Media.Body>
          </Media>
        ))}
        <LinkContainer
          exact
          to="/advocacy/blog"
          className="d-flex justify-content-center"
        >
          <Button variant="primary">Read More</Button>
        </LinkContainer>
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <h2>2019 Fellows</h2>
      </Col>
    </Row>
    <hr />
    <Row>
      {fellows2019.map(fellow => (
        <FellowCard fellow={fellow} />
      ))}
    </Row>
  </Container>
);

export default AdvocacyPage;
