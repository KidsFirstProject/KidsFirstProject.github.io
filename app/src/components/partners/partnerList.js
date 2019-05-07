import { importAll } from '../../utils/imageImport';

const images = importAll(require.context('../../assets/images/partners', false, /\.(png|jpe?g|gif)$/));

const partnerList = [
  {
    imageUrl: images['CentralCityConcern.png'],
    name: 'Central City Concern',
    description: 'Central City Concern meets its mission through innovative outcome based strategies which support personal and community transformation.',
    ctaUrl: 'http://www.centralcityconcern.org/ccc/'
  },
  {
    imageUrl: images['codeRed.jpg'],
    name: 'Code Red',
    description: 'Code Red seeks to provide feminine hygiene products to homeless women in need, giving them an effective and healthy way to manage their periods, and empowering women to take care of themselves.',
    ctaUrl: 'http://coderedco.squarespace.com/'
  },
  {
    imageUrl: images['girls4change.png'],
    name: 'Girls 4 Change',
    description: 'An organization focused on helping young women understand their ability to reach executive positions, by focusing on introducing young women to future career paths they can attain. The goal of this program is for young women to build confidence in themselves and know that they can achieve anything in the future. This will help them realize their own strengths, value, and power.',
    ctaUrl: 'https://www.facebook.com/Girls4Change'
  },
  {
    imageUrl: images['GirlsScienceInteractive.png'],
    name: 'Girls Science Interactive',
    description: 'Girls Science Interactive is a youth-led nonprofit organization that provides free STEM summer camps and other programs for elementary and middle school girls to spark their interest in science.',
    ctaUrl: 'http://science-interactive.org/'
  },
  {
    imageUrl: images['HandsOn.png'],
    name: 'Hands On',
    description: 'Hands On Greater Portland can help. We will connect you with a volunteer opportunity that makes a meaningful, rewarding change in the Portland area. Hands On Greater Portland offers you a variety of ways to get involved while meeting your schedule and interests. When you volunteer with Hands On Greater Portland, you join people from all backgrounds and experiences. You get a chance to explore issues that shape our community and develop your leadership and job skills. Get connected. Get more done. Have fun. You might even change the world.',
    ctaUrl: 'http://www.handsonportland.org/'
  },
  {
    imageUrl: images['home-sweet-home-ministries.png'],
    name: 'Home Sweet Home Ministries',
    description: 'Home Sweet Home Ministries demonstrates Christ\'s love through innovative approaches that instill hope, restore lives, and build community.',
    ctaUrl: 'https://hshministries.org/'
  },
  {
    imageUrl: images['life-moves.png'],
    name: 'LifeMoves',
    description: 'LifeMoves programs combat homelessness today – and tomorrow – by teaching comprehensive life skills that help our clients achieve long-term self-sufficiency, and effectively break the cycle of homelessness.',
    ctaUrl: 'http://lifemoves.org/'
  },
  {
    imageUrl: images['neighborhood-house-logo.png'],
    name: 'Neighborhood House',
    description: 'Neighborhood House has been bringing the community together to help neighbors in need since 1905. We’re here for families facing hunger and homelessness, vulnerable seniors and children who need help in school. Our programs help low-income, recent-immigrant and other vulnerable people overcome challenges so they can achieve success, stability and independence.',
    ctaUrl: 'http://www.nhpdx.org/'
  },
  {
    imageUrl: images['noblehour-logo.png'],
    name: 'Noble Hour',
    description: 'NobleHour connects people with opportunities, tracks projects and service hours, and generates comprehensive and powerful impact reports.',
    ctaUrl: 'https://www.noblehour.com/'
  },
  {
    imageUrl: images['period.jpg'],
    name: 'PERIOD',
    description: 'PERIOD is a non-profit group run by young activists. We are leading the Menstrual Movement by changing the conversation around periods and providing care to those in need.',
    ctaUrl: 'https://www.period.org/'
  },
  {
    imageUrl: images['phfs.png'],
    name: 'Portland Homeless Family Solutions',
    description: 'Portland Homeless Family Solutions is a nonprofit organization whose mission is to help homeless families with children move back into housing and stay there long term.',
    ctaUrl: 'http://pdxhfs.org/'
  },
  {
    imageUrl: images['psu.png'],
    name: 'Portland State University',
    description: 'Portland State\'s 49-acre downtown campus is located in the heart of one of America\'s most vibrant centers of culture, business and technology. We are recognized throughout the world for programs like Urban Planning, Social Work, and Environmental Studies that directly engage the community, and aim our students towards the creation of a better, more sustainable world.',
    ctaUrl: 'http://www.pdx.edu/student-community-engagement/student-leaders-for-service-team-members'
  },
  {
    imageUrl: images['rescue-team-kenya.png'],
    name: 'Rescue Team Kenya',
    description: 'Rescue Team Kenya (RTK) is a voluntary charity organization not for profit, is independent and inclusive of all faiths and cultures with an agenda to restore hope and trust to the most vulnerable children by improving the lives of children by giving them tools they need to build sustainable solutions for improving their lives and families.',
    ctaUrl: 'http://www.rescueteamkenya.org/'
  },
  {
    imageUrl: images['SUNprogram.gif'],
    name: 'SUN Community Schools',
    description: 'SUN Community Schools are a collaboration between Multnomah County, Portland Parks & Recreation, and Centennial, Reynolds, Parkrose, David Douglas, Gresham-Barlow, and Portland Public School Districts. Eleven SUN sites are operated by PP&R. Critical components of the program include education, social services, multicultural and cultural arts, recreation and leisure services, health services, and community involvement.',
    ctaUrl: 'http://www.portlandoregon.gov/parks/39840'
  }
];

export default partnerList;