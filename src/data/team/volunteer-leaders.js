import importAll from '../../utils/imageImport';

const images = importAll(
  require.context(
    '../../assets/images/members/leaders',
    false,
    /\.(png|jpe?g)$/
  )
);

const volunteerLeaders = [
  {
    imageUrl: images['An-Daae.jpg'],
    name: 'Daae An',
    description:
      'Daae An is a freshman at University of Southern California. She has volunteered with Children’s Miracle Network Hospitals and Doernbecher Children’s Hospital throughout her involvement with the Miss America organization.'
  },
  {
    imageUrl: images['Fishback-Michaela.jpg'],
    name: 'Michaela Fishback',
    description:
      'Michaela Fishback is a sophomore at University of Oregon who is interested in pursuing environmental sciences and art in college. She just moved from Iowa last summer and looks forward bringing her skills in leadership and communication to supporting homeless families in Portland.'
  },
  {
    imageUrl: images['Jeffreys-Ella.png'],
    name: 'Ella Jeffreys',
    titles: ['Blogger'],
    description:
      'Ella Jeffreys is currently a junior at Lincoln High School. She spends her time staying active, being in the outdoors, and doing schoolwork. She enjoys spending time with children and wants to ensure they get opportunities to learn and do what they love.'
  },
  {
    imageUrl: images['Johnson-Mia.jpg'],
    name: 'Mia Johnson',
    description:
      "Mia Johnson is a current junior at Cleveland High School. She is passionate about leadership, traveling and working with kids! She is super excited for this project and to see the impact it will have on kids' lives in our community. Every child deserves the same opportunities!"
  },
  {
    imageUrl: images['Kaliszewski-Gwen.jpg'],
    name: 'Gwen Kaliszewski',
    description:
      'Gwen Kaliszewski is a junior at Cleveland High School. She is passionate about human rights and believes that youth have the power to make immense change. She loves dancing, reading, writing poetry, and spending time with her friends. Through her work with Kids First Project she wants to give kids a chance to have a happy and fulfilling childhood.'
  },
  {
    imageUrl: images['Lambert-Kate.jpg'],
    name: 'Kate Lambert',
    titles: ['Blogger'],
    description:
      "Kate is currently a senior at Lincoln High school. Other than Kids First Project, Kate is a member of Mission Citizen, a program focused on educating individuals going through the US citizenship process, and her schools track team. She's excited to apply her passion for writing towards such an important cause."
  },
  {
    imageUrl: images['Miller-Mirabella.jpg'],
    name: 'Mirabella Miller',
    description:
      'Mirabella Miller is currently a junior at Cleveland High School. She is a member of the Speech and Debate team as well as a member of C.A.R.E. (Cleveland Alliance for Racial Equity). Her free time is spent reading, hiking, and writing. She is excited for this opportunity to empower disadvantaged youth.'
  },
  {
    imageUrl: images['Peters-Simone.jpg'],
    name: 'Simone Peters',
    description:
      "Simone Peters is currently a freshman at University of Oregon. She is dedicated to making a difference concerning social issues, as well as working with Portland's youth."
  }
];

export default volunteerLeaders;
