import importAll from '../../utils/imageImport';

const images = importAll(
  require.context(
    '../../assets/images/members/directors',
    false,
    /\.(png|jpe?g)$/
  )
);

const directors = [
  {
    imageUrl: images['Zhao-Alisha.jpg'],
    name: 'Alisha Zhao',
    titles: ['Executive Director'],
    description:
      'Alisha Zhao is currently a sophomore at Stanford University. Passionate about human rights and the many intersections among them, she believes in the power of a community to drive social change. She hopes to continue increasing access to resources for youth experiencing homelessness through policy and law.'
  },
  {
    imageUrl: images['Asher-Malcom.jpg'],
    name: 'Malcolm Asher',
    titles: ['Operations Director'],
    description:
      'Malcolm Asher is a junior at Cleveland High School. He is passionate about the health care of kids, and aspires to be a pediatrician. He enjoys volunteering at Doernbecher Children’s Hospital, and working with youth experiencing homelessness through Kids First Project. He believes all kids should have equal opportunities in life.'
  },
  {
    imageUrl: images['del-Pilar-Agudelo-Maria.jpg'],
    name: 'Maria del Pilar Agudelo',
    titles: [
      'Director of Communication',
      'President of Lincoln High School Chapter'
    ],
    description:
      'Maria del Pilar Agudelo is a senior at Lincoln High school. She spends her time volunteering and teaching sexual education. She hopes to one day have a career in public health or clinical psychology. She loves kids and works hard to give them the same opportunities she has had.'
  },
  {
    imageUrl: images['Ma-Emily.png'],
    name: 'Emily Ma',
    titles: ['Director of Finance and Administration'],
    description:
      'Emily Ma is currently a freshman at University of Oregon. She loves to work with animals and children. She is currently volunteering at Turning Point with young children to provide fun stimulating activities.'
  },
  {
    imageUrl: images['Zhang-Sharon.jpg'],
    name: 'Sharon Zhang',
    titles: ['Program Director'],
    description:
      "Sharon Zhang is a sophomore at Columbia University and has been volunteering with PHFS for almost 5 years now. She's also recently completed a service project at Goose Hollow for her Girl Scout Gold Award that focuses on raising the self-esteem levels of homeless youth through self-expression."
  },
  {
    imageUrl: images['Keepers-Claire.jpg'],
    name: 'Claire Keepers',
    titles: ['Peer Mentoring Program Director'],
    description:
      'Claire Keepers is currently a senior at Portland State University. Dedicated to volunteering, she is passionate about child development and ensuring they have adequate resources and support.'
  },
  {
    imageUrl: images['Carton-Abby.jpg'],
    name: 'Abby Carton',
    titles: ['Director of Photography'],
    description:
      'Abby Carton is currently a freshman at Chapman University, who likes being creative. She enjoys drawing, painting, photography, and film. She believes that every child should be able to develop passions, and have the resources to further them.'
  },
  {
    imageUrl: images['Charitan-David.jpg'],
    name: 'David Charitan',
    titles: ['Graphic Designer'],
    description:
      'David Charitan is a freshman at Brown University. He is excited to be able to connect his passion for graphic design with his interest in community involvement.'
  },
  {
    imageUrl: images['Eroh-Alli.jpg'],
    name: 'Alli Eroh',
    titles: ['Volunteer Coordinator'],
    description:
      'Alli Eroh is currently a senior at Lincoln High School. She believes in the power of education and public awareness though communication and public events.'
  },
  {
    imageUrl: images['Subramaniam-Brad.jpg'],
    name: 'Brad Subramaniam',
    titles: ['Director of Finance and Administration'],
    description:
      'Brad is a sophomore economics major at the University of Chicago, and has been working with kids on several projects, including volunteering at PHFS, working at a summer camp with kids in Europe, and tutoring Math, English, and Spanish. He also volunteered with refugees in the Balkans. He is now a senior reporter at the Chicago Maroon and is an assistant coach for debate at Lincoln High School in Portland, Oregon.'
  },
  {
    imageUrl: images['Lin-Ashley.jpg'],
    name: 'Ashley Lin',
    titles: ['Scholarship Director'],
    description:
      'Ashley Lin is a freshman at Union High School. She is very passionate about bridging the opportunity gap for students from different socioeconomic sectors, and believes all youth should have access to the support and resources to reach their full potential. Having caught the entrepreneurship bug early on, Ashley hopes to bring that and her love for politics and law together to drive positive social change within her community.'
  }
];

export default directors;
