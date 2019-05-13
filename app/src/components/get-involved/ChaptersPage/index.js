import React from 'react';
import { Container, Col, Row, Carousel, Button } from 'react-bootstrap';
import image1 from '../../../assets/images/chapters/carousel/pic1.jpg';
import image2 from '../../../assets/images/chapters/carousel/pic2.jpg';
import image3 from '../../../assets/images/chapters/carousel/pic3.jpg';
import image4 from '../../../assets/images/chapters/carousel/pic4.jpg';
import styles from './ChaptersPage.module.css';

const carouselImages = [
  image1,
  image2,
  image3,
  image4
];

const ChaptersPage = () => (
  <Container className="page-container">
    <h1>Kids First Project Chapters</h1>
    <hr />
    <Row>
      <Col>
        <Carousel>
          {
            carouselImages.map((image, index) => (
              <Carousel.Item key={`slide_${index}`}>
                <div className={`${styles.carouselItem} d-flex flex-column justify-content-center`}>
                  <img className={`d-block w-100 ${styles.carouselImage}`} src={image} alt={`Slide ${index}`} />
                </div>
              </Carousel.Item>
            ))
          }
        </Carousel>
      </Col>
    </Row>
    <hr />
    <Row>
      <Col>
          <h4>Want to start a chapter in your area?</h4>
          <p>Use this handy toolkit to get started today!</p>
          <Button variant="primary" href="https://docs.google.com/document/d/1f9k6bTHGvYaVM4GtpQWGrFFg2zgiMSOZpomFdhrKnj4/edit?usp=sharing">Chapter Toolkit</Button>
      </Col>
    </Row>
  </Container>
);

export default ChaptersPage;