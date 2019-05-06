import { importAll } from './util';

const images = importAll(require.context('../../../assets/images/members/advisory', false, /\.(png|jpe?g)$/));

const advisors = [
  {
    imageUrl: images['Bennette-Deyalo.jpg'],
    name: 'Deyalo Bennette',
    titles: ['Public Relations'],
    description: 'Deyalo Bennette is a local Portlander studying Philosophy and Communication at Portland State University (PSU). He’s been involved with social justice since the age of 13 after living in the drug war, being homeless, going through foster care and all that comes along.'
  },
  {
    imageUrl: images['Chapman-Peyton.jpg'],
    name: 'Peyton Chapman',
    titles: ['Principal at Lincoln High School'],
    description: ''
  },
  {
    imageUrl: images['Harrison-Kimberly.jpg'],
    name: 'Kimberly Harrison',
    titles: ['Founder of Creative Partners Curriculum'],
    description: 'Kim is an early childhood educator, family engagement specialist and founder of Creative Partners Curriculum. She believes that fun, engaging play is an essential ingredient of life and is excited to share that enthusiasm with the Kids First Project team.'
  },
  {
    imageUrl: images['Home-Ashley.jpg'],
    name: 'Ashley Home',
    titles: ['Public Involvement Best Practices Program', 'Coordinator at City of Portland'],
    description: ''
  },
  {
    imageUrl: images['Morris-Susan.jpg'],
    name: 'Susan Morris',
    titles: ['Retired PPS Teacher'],
    description: 'Susan has worked with students grade 3 through grade 9 as a teacher and professional development instructor. With a passion for math and English, Susan has led several workshops around the world., been a nominee for Teacher of the Year, and received the PPS Volunteer Award.'
  },
  {
    imageUrl: images['Mrusko-Emily.jpg'],
    name: 'Emily Mrusko',
    titles: ['Events & Development Coordinator at Girls Inc.'],
    description: 'Emily is passionate about providing opportunity for the homeless population, especially by empowering youth affected by poverty. In her free time, she enjoys hiking, camping, and spending time with her cat, Madame George.'
  },
  {
    imageUrl: images['OMalley-Shannon.jpg'],
    name: 'Shannon O\'Malley',
    titles: ['Project Manager at Brew Advisors'],
    description: 'Shannon brings a passion for social justice, education and youth empowerment to the team. Her work with the Make A Wish Foundation, SOLD Project, and Nike Foundation will contribute to the development of the Kids First Project.'
  },
  {
    imageUrl: images['Rocci-Bethany.png'],
    name: 'Bethany Rocci',
    titles: ['Volunteer Manager at Portland Homeless Family Solutions'],
    description: ''
  },
  {
    imageUrl: images['Winder-Julie.jpg'],
    name: 'Julie Winder',
    titles: ['Retired PPS Teacher'],
    description: 'Julie is a retired elementary school teacher who has worked with students aged preschool through grade 9. Her involvement in Kids First Project is based on the hope of ending homelessness for families by providing positive guidance, support, homework help, and life skills for youth. She is interested in world cultures and travel.'
  }
];

export default advisors;