import React from 'react';
import { Container, Col, Row, Button, Media } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FellowCard from './FellowCard';
import fellows2019 from '../../data/advocacy/2019';
import { recentPosts } from '../../data/advocacy/blog';
import iconMap from '../BlogList/iconMap';
import Gallery from './Gallery';

dayjs.extend(advancedFormat);

const AdvocacyPage = () => (
  <Container className="page-container">
    <h1>Summer Advocacy Fellowship</h1>
    <hr />
    <Row>
      <Col lg={8}>
        <p>
          The Kids First Project Summer Advocacy Fellowship provides current and
          former youth experiencing homelessness with a platform to share their
          stories and be heard. Our five 2019 fellows participated in a two-day
          workshop in Portland, OR, learning about policies regarding
          homelessness and how to engage in effective advocacy from guest
          speakers, and then crafting their own pitches and one-pagers. The
          fellowship culminated in a trip to Washington, D.C., where the fellows
          met with Senator Merkley and Wyden on Capitol Hill as well as the
          National Law Center on Homelessness & Poverty, sharing their stories
          and calls to action. Back home, our fellows have continued their
          advocacy both in Portland and Salem.
        </p>
      </Col>
      <Col>
        <h2>Summer Advocacy Blog</h2>
        {recentPosts.map(({ title, publishDate, type, id }) => (
          <Media key={`media-object-${id}`}>
            <FontAwesomeIcon icon={iconMap[type]} size="4x" color="#60CCCC" />
            <Media.Body>
              <Container>
                <Link to={`advocacy/blog/post/${id}`}>
                  <h5>{title}</h5>
                </Link>
                <p>{dayjs(publishDate).format('MMM Do YYYY')}</p>
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
      {fellows2019.map((fellow, index) => (
        <FellowCard fellow={fellow} key={`fellow-${index}`} />
      ))}
    </Row>
    <br />
    <Row>
      <Col>
        <h2>Gallery</h2>
      </Col>
    </Row>
    <hr />
    <Row>
      <Gallery />
    </Row>
  </Container>
);

export default AdvocacyPage;
