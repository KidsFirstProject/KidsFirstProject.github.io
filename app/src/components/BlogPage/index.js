import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import moment from 'moment';
import { postMap } from '../../data/blog';
import styles from './BlogPage.module.css';

const BlogPage = ({ match }) => {
  const blog = postMap[match.params.id];
  const { title, publishDate, headerImage, body } = blog;
  return (
    <Container className="page-container">
      <h1>{title}</h1>
      <hr className={styles.sectionDivider} />
      <p><FontAwesomeIcon icon={faClock} /> Posted on {moment(publishDate, 'YYYY-MM-DD').format('MMM Do Y')}</p>
      <hr className={styles.sectionDivider} />
      <Row className="d-flex justify-content-center">
        <Col>
          <Image src={headerImage} fluid rounded />
        </Col>
      </Row>
      <hr className={styles.sectionDivider} />
      <Row>
        <Col>
          {
            body.map(section => {
              switch(section.type) {
                case 'lead':
                  return <p className="lead">{section.text}</p>;
                case 'paragraph':
                  return (<p>{section.text}</p>);
                default:
                  return '';
              }
            })
          }
        </Col>
      </Row>
      <hr className={styles.sectionDivider}/>
    </Container>
  );
};

export default BlogPage;