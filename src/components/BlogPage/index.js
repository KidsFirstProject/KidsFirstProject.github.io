import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
  Table,
  ResponsiveEmbed,
  Carousel
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { shape, string, objectOf, number, arrayOf } from 'prop-types';
import styles from './BlogPage.module.css';

dayjs.extend(advancedFormat);

const renderBlogPageHeader = content => (
  <React.Fragment>
    <Row>
      <Col>{content}</Col>
    </Row>
    <hr className={styles.sectionDivider} />
  </React.Fragment>
);

const BlogPage = ({ match, postMap }) => {
  const blog = postMap[match.params.id];
  const { title, publishDate, headerImage, headerImages, body } = blog;
  return (
    <Container className="page-container">
      <h1>{title}</h1>
      <hr className={styles.sectionDivider} />
      <p>
        <FontAwesomeIcon icon={faClock} /> Posted on{' '}
        {dayjs(publishDate).format('MMM Do YYYY')}
      </p>
      <hr className={styles.sectionDivider} />
      {headerImage
        ? renderBlogPageHeader(
            <div className="text-center">
              <Image
                src={headerImage}
                fluid
                rounded
                className={styles.headerImage}
              />
            </div>
          )
        : ''}
      {headerImages
        ? renderBlogPageHeader(
            <Carousel>
              {headerImages.map((image, index) => (
                <Carousel.Item key={`slide_${index}`}>
                  <div
                    className={`${styles.carouselItem} d-flex flex-column justify-content-center`}
                  >
                    <img
                      className={`d-block w-100 ${styles.carouselImage}`}
                      src={image}
                      alt={`Slide ${index}`}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          )
        : ''}
      <Row>
        <Col>
          {body.map((section, index) => {
            switch (section.type) {
              case 'lead':
                return (
                  <p className="lead" key={`section-${index}`}>
                    {section.text}
                  </p>
                );
              case 'paragraph':
                return <p key={`section-${index}`}>{section.text}</p>;
              case 'strong':
                return <strong key={`section-${index}`}>{section.text}</strong>;
              case 'divider':
                return (
                  <hr
                    className={styles.sectionDivider}
                    key={`section-${index}`}
                  />
                );
              case 'small':
                return <small key={`section-${index}`}>{section.text}</small>;
              case 'image':
                return (
                  <div className="text-center" key={`section-${index}`}>
                    <Image
                      fluid
                      rounded
                      src={section.image}
                      className={styles.blogImage}
                    />
                  </div>
                );
              case 'heading':
                return <h2 key={`section-${index}`}>{section.text}</h2>;
              case 'author':
                return (
                  <div className="d-flex flex-column" key={`section-${index}`}>
                    <strong>{section.name} </strong>
                    {section.title ? <small>{section.title}</small> : ''}
                    {section.biography ? (
                      <p className="font-italic">{section.biography}</p>
                    ) : (
                      ''
                    )}
                  </div>
                );
              case 'list':
                if (section.ordered) {
                  return (
                    <ol key={`section-${index}`}>
                      {section.data.map(item => (
                        <li>{item}</li>
                      ))}
                    </ol>
                  );
                }
                return (
                  <ul key={`section-${index}`}>
                    {section.data.map(item => (
                      <li>{item}</li>
                    ))}
                  </ul>
                );

              case 'table':
                return (
                  <React.Fragment key={`section-${index}`}>
                    <h4>{section.title}</h4>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          {section.column_headers.map(header => (
                            <th>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.data.map(row => (
                          <tr>
                            {row.map(dataPoint => (
                              <td>{dataPoint}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </React.Fragment>
                );
              case 'pdf':
                return (
                  <ResponsiveEmbed aspectRatio="16by9" key={`section-${index}`}>
                    <iframe title={section.title} src={section.file} />
                  </ResponsiveEmbed>
                );
              default:
                return '';
            }
          })}
        </Col>
      </Row>
      <hr className={styles.sectionDivider} />
    </Container>
  );
};

BlogPage.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired
    })
  }).isRequired,
  postMap: objectOf(
    shape({
      id: number.isRequired,
      title: string.isRequired,
      type: string.isRequired,
      publishDate: string.isRequired,
      summary: string.isRequired,
      body: arrayOf(
        shape({
          type: string.isRequired
        })
      )
    })
  )
};

BlogPage.defaultProps = {
  postMap: {}
};

export default BlogPage;
