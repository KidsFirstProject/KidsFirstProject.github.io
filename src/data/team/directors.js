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
    imageUrl: images['Subramaniam-Brad.jpeg'],
    name: 'Brad',
    titles: ['Co-Executive Director'],
    description:
      'Brad is a senior Economics major at the University of Chicago who has served on Kids First Project’s board since 2017. As a Portland native, he is determined to help solve the city’s increasing prevalence of homelessness. His previous experiences include volunteering at PHFS, tutoring children, and covering the Syrian refugee crisis in Eastern Europe. He is currently an editor at The Chicago Maroon, and an assistant coach for Lincoln High School’s debate team. In his free time, he enjoys fishing, walks through nature, and basketball. Brad’s ultimate goal as part of Kids First Project is to have meaningful connections with children experiencing homelessness and to make a positive impact on their lives.'
  },
  {
    imageUrl: images['Panyam-Sheila.jpg'],
    name: 'Sheila',
    titles: ['Co-Executive Director'],
    description:
      'Sheila Panyam is a recent graduate of the University of Washington. She is passionate about civic education, youth empowerment, and harnessing the power of storytelling to inspire change. Sheila is a published novelist, a tutor, and a coach for Lincoln High School’s Constitution Team. She joined the Kids First Project because she wants to give back to the community that raised her, and aligns with the organization’s mission to advocate for youth holistically by valuing educational, physical, and wellness needs. In addition to her creative writing hobby, Sheila aspires to practice environmental or asylum law one day.'
  },
  {
    imageUrl: images['Baylee.jpg'],
    name: 'Baylee',
    titles: ['Co-Advocacy Director'],
    description: 'My name is Baylee, and I was a part of the Kids First Project fellowship in 2019. I’ve had a heart for advocacy from a young age. My goal while working with Kids First is to help others in their journey through advocacy, and to help cultivate change in the houseless community.'
  },
  {
    imageUrl: images['Williams-Lois.jpg'],
    name: 'Lois',
    titles: ['Co-Advocacy Director'],
    description:
      'Lois Williams is currently a junior at Stanford University. They are passionate about healthcare equity, human rights, and mental health, and hopes to work in the healthcare field as an advocate and specialist in adolescent mental health.  They enjoy reading, roller-skating, and volunteering in local free clinics and for initiatives focused on homelessness in diverse communities. They hope to work with and learn from advocates who have experienced homelessness firsthand and inspire change across communities.'
  },
  {
    imageUrl: images['Rhiannon.jpeg'],
    name: 'Rhiannon',
    titles: ['Director of Finance and Administration'],
    description:
      'Rhiannon is currently a sophomore at Stanford University. She is passionate about the intersection of law and business, with an emphasis on human rights. Over the years, she’s volunteered for a public law center\'s immigration unit, a children\'s special needs camp, and an organization focused on empowering veterans with PTSD. Through community education and increasing homeless youths\' accessibility to resources, she believes Kids First Project has the ability to create meaningful change.'
  },
  {
    imageUrl: images['Tara.png'],
    name: 'Tara',
    titles: ['Communications Director'],
    description:
      'Tara is currently a sophomore at Lincoln High School, where Kids First Project was started. Tara has worked with several organizations with a focus on health and social education in children. She has worked with the Sierra Project Foundation that is involved in health education in youth and Stumptown Speaker Series, an organization that interviews entrepreneurs to help high schoolers find their careers. In her free time, Tara loves playing tennis and competing on Lincoln’s speech and debate team. She is excited to work with Kids First Project to support youth experiencing homelessness and see positive change in her community.'
  },
  {
    imageUrl: images['Zhao-Alisha.jpg'],
    name: 'Alisha Zhao',
    titles: ['Advisor'],
    description:
      'Alisha Zhao is passionate about human rights and the many intersections among them, she believes in the power of a community to drive social change. She hopes to continue increasing access to resources for youth experiencing homelessness through policy and law.'
  }
];

export default directors;
