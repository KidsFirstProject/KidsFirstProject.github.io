import React from 'react';
import { Container } from 'react-bootstrap';
import InfoSection from './InfoSection';
import issueImage from '../../assets/images/shelter/shelter002.jpg';
import missionImage from '../../assets/images/shelter/shelter003.jpg';
import originImage from '../../assets/images/chapters/portland-or/hfh02.jpg';

const issueText =
  'The average age of a person experiencing homelessness in the US is 9 years old. Because children cannot live on the streets, this issue often goes unnoticed. When our Founder, Alisha Zhao, spoke to a transitional housing organization in Portland, OR, when creating Kids First Project, she learned that they had lost funding for children’s activities and could not manage volunteers. This is not an isolated case. Despite their right to extracurricular activities, youth experiencing homelessness across the country often lack access to them. Given the social, cognitive, and academic benefits of extracurricular activities, programs and volunteers are needed in shelters to empower youth experiencing homelessness to reach their full potential.';
const missionText =
  'To empower youth experiencing homelessness to reach their full potential and help break the generational cycle of poverty.';
const originText =
  'Before having the idea of creating Kids First Project in 2015, Alisha was a volunteer at her local family homeless shelter, where she met children and youth with the vision of becoming doctors, artists, teachers, and presidents, yet did not have the resources necessary to pursue their dreams. After spending years volunteering and speaking with families experiencing homelessness, she realized the serious lack of affordable and convenient educational programs available for youth experiencing homelessness. Now run by a passionate and dedicated team of young people across the country, Kids First Project has been increasing access to resources for youth experiencing homelessness ever since.';

const AboutPage = () => (
  <Container className="page-container">
    <h1>About</h1>
    <hr />
    <InfoSection imageUrl={issueImage} title="The Issue" text={issueText} />
    <hr />
    <InfoSection
      imageUrl={missionImage}
      title="Our Mission"
      text={missionText}
    />
    <hr />
    <InfoSection imageUrl={originImage} title="Our Origin" text={originText} />
    <hr />
  </Container>
);

export default AboutPage;
