import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styles from './Header.module.css';
import aboutImage from '../../assets/images/shelter/shelter010.jpg';
import volunteerImage from '../../assets/images/shelter/shelter018.jpg';

const Header = () => (
  <Carousel pauseOnHover={false}>
    <Carousel.Item>
      <div className={`${styles.carouselItem} d-flex flex-column justify-content-center`}>
        <img className={`d-block w-100 ${styles.carouselImage}`} src={aboutImage} alt="First slide" />
      </div>
      <Carousel.Caption>
        <h1>HOPE</h1>
        <p>Health, Opportunity, Play, Education</p>
        <LinkContainer to="/about">
          <Button variant="primary">Learn More</Button>
        </LinkContainer>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <div className={`${styles.carouselItem} d-flex flex-column justify-content-center`}>
        <img className={`d-block w-100 ${styles.carouselImage}`} src={volunteerImage} alt="First slide" />
      </div>
      <Carousel.Caption>
        <h1>Giving HOPE to all.</h1>
        <p>Offering homeless youth the opportunity for health, opportunity, play, education</p>
        <LinkContainer to="/volunteer">
          <Button variant="primary">Get Involved Today</Button>
        </LinkContainer>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);

export default Header;