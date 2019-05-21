import importAll from '../../utils/imageImport';

const images = importAll(
  require.context(
    '../../assets/images/advocacy/2019',
    false,
    /\.(jpg|png)$/
  )
);

const fellows2019 = [
  {
    imageUrl: images['Norena-Lopez-Arias.jpg'],
    name: 'Norena Lopez Arias',
    biography: 'I’m 19 years old and currently attending Portland Community College with an interest in Social Work. I love learning and trying new things, and I have a passion for helping others. In my free time I enjoy spending time with my loved ones, traveling, and skateboarding!'
  },
  {
    imageUrl: images['Haven-Thompson.jpg'],
    name: 'Haven Thompson',
    biography: 'Hi! I’m 19 years old and a transgender male. I’m excited to be a fellow, because I want people to know who I am and that I’m not afraid of being myself. I’m a proud trans male!'
  },
  {
    imageUrl: images['Miranda-Carstensen.png'],
    name: 'Miranda Carstensen',
    biography: 'I became homeless September of 2017 and became housed May 4th, 2018. When I became homeless, I bought my first instrument, which was a ukulele, and taught myself how to play in my free time. I also went back to school to obtain my GED in November of 2017. Since I became housed, I have also taught myself guitar and became a foster mom for cats and kittens to homeless youth while their owners take the time to get housed themselves. I enrolled in PCC September of 2018 to obtain my CADC 1 to become a drug and alcohol counselor, won a 6-month scholarship through one of my old shelters, and was even put on the Dean\'s list at my school Winter of 2018 for having a 3.5 GPA.'
  },
  {
    imageUrl: images['Baylee-Clark.jpg'],
    name: 'Baylee Clark',
    biography: 'I am currently working as a barista, and am very passionate about coffee and its sourcing; however my goal is to be a NICU nurse. I care a lot about people and love helping in whatever way I can. In my free time I like to hike, read, and spend time with friends.'
  },
  {
    imageUrl: images['Jerome-Moss.jpg'],
    name: 'Jerome Moss',
    biography: 'I\'m 22, battle depression, and live to help others. My interests involve traveling and experiencing different environments & cultures. I am originally from Phoenix, Arizona, from a family that never interrupted my free spirited self-expression. I\'ve worked a lot of odd jobs and pride myself on the relationships I\'ve made while on my journey.'
  },
];

export default fellows2019;
