import React, { useState } from 'react';
import { Container, Pagination, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { posts } from '../../data/blog';

const iconMap = {
  'text': faFileAlt
};

const BlogList = () => {
  const [ pageNum, setPageNum ] = useState(1);

  const pages = posts.length;
  const paginationItems = [];
  for (let number = 1; number <= pages; number++) {
    paginationItems.push(
      <Pagination.Item key={number} active={number === pageNum}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <Container className="page-container">
      <h1>The Kids First Project Blog</h1>
      <hr />
      {
        posts[pageNum - 1].map(post => (
          <React.Fragment>
            <Row>
              <Col md={2} className="d-flex flex-column align-items-center justify-content-center">
                <FontAwesomeIcon icon={iconMap[post.type]} size="4x" color={'#60CCCC'} />
                <p>{moment(post.publishDate, 'YYYY-MM-DD').format('MMM Do Y')}</p>
              </Col>
              {
                post.headerImage ? 
                <Col md={4} className="d-flex align-items-center justify-content-center">
                  <Link to={`/blog/${post.id}`}>
                    <Image src={post.headerImage} fluid rounded />
                  </Link>
                </Col>
                : ''
              }
              <Col className="d-flex flex-column justify-content-center">
                <Link to={`/blog/${post.id}`}>
                  <h3>
                      {post.title}
                  </h3>
                </Link>
                <p class="lead">
                  {post.summary}
                </p>
                <Link to={`/blog/${post.id}`}>
                  <Button variant="primary">
                    Read More <FontAwesomeIcon icon={faAngleRight} />
                  </Button>
                </Link>
              </Col>
            </Row>
            <hr />
          </React.Fragment>
        ))
      }
      <Row>
        <Col className="d-flex justify-content-center">
          <Pagination>
            {paginationItems}
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogList;