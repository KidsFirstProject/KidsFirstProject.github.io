import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import CardGroup from './CardGroup';
import KFPVideo from './KFPVideo';
import SocialMedia from './SocialMedia';

const HomePage = () => (
  <div>
    <Header />
    <Container>
      <CardGroup />
      <KFPVideo />
      <SocialMedia />
    </Container>
  </div>
);

export default HomePage;