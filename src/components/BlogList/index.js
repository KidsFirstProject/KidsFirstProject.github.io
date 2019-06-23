import React from 'react';
import {
  Container,
  Pagination,
  Row,
  Col,
  Image,
  Button
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { shape, string, arrayOf, number, element } from 'prop-types';
import iconMap from './iconMap';

const BlogList = ({ match, pageTitle, posts, postPrefix }) => {
  const currentPage = parseInt(match.params.page, 10) || 1;

  const pages = posts.length;
  const paginationItems = [];
  for (let pageNum = 1; pageNum <= pages; pageNum += 1) {
    paginationItems.push(
      <LinkContainer exact to={`/blog${pageNum === 1 ? '' : `/${pageNum}`}`}>
        <Pagination.Item key={pageNum} active={pageNum === currentPage}>
          {pageNum}
        </Pagination.Item>
      </LinkContainer>
    );
  }

  return (
    <Container className="page-container">
      <h1>{pageTitle}</h1>
      <hr />
      {pages > 0 ? (
        posts[currentPage - 1].map(
          ({
            type,
            publishDate,
            headerImage,
            headerImages,
            id,
            title,
            summary
          }) => {
            const thumbnailImage =
              headerImage || (headerImages ? headerImages[0] : null);
            const postUrl = `${postPrefix}/blog/post/${id}`;
            return (
              <React.Fragment>
                <Row>
                  <Col
                    md={2}
                    className="d-flex flex-column align-items-center justify-content-center"
                  >
                    <FontAwesomeIcon
                      icon={iconMap[type]}
                      size="4x"
                      color="#60CCCC"
                    />
                    <p>
                      {moment(publishDate, 'YYYY-MM-DD').format('MMM Do Y')}
                    </p>
                  </Col>
                  {thumbnailImage ? (
                    <Col
                      md={4}
                      className="d-flex align-items-center justify-content-center"
                    >
                      <Link to={postUrl}>
                        <Image src={thumbnailImage} fluid rounded />
                      </Link>
                    </Col>
                  ) : (
                    ''
                  )}
                  <Col className="d-flex flex-column justify-content-center">
                    <Link to={postUrl}>
                      <h3>{title}</h3>
                    </Link>
                    <p className="lead">{summary}</p>
                    <Link to={postUrl}>
                      <Button variant="primary">
                        Read More <FontAwesomeIcon icon={faAngleRight} />
                      </Button>
                    </Link>
                  </Col>
                </Row>
                <hr />
              </React.Fragment>
            );
          }
        )
      ) : (
        <p>No posts yet!</p>
      )}
      <Row>
        <Col className="d-flex justify-content-center">
          <Pagination>{paginationItems}</Pagination>
        </Col>
      </Row>
    </Container>
  );
};

BlogList.propTypes = {
  match: shape({
    params: shape({
      page: string
    })
  }),
  pageTitle: string.isRequired,
  posts: arrayOf(
    shape({
      type: string,
      publishDate: string,
      headerImage: element,
      headerImages: arrayOf(element),
      id: number,
      title: string,
      summary: string
    })
  ).isRequired,
  postPrefix: string
};

BlogList.defaultProps = {
  match: shape({
    params: shape({
      page: '1'
    })
  }),
  postPrefix: ''
};

export default BlogList;
