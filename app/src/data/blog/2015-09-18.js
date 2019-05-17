import headerImage from '../../assets/images/blog/2015-09-18.jpg';
import LetterFromNick from '../../assets/pdf/Letter-from-Commissioner-Nick-Fish.pdf';
import LetterFromPat from '../../assets/pdf/Letter-from-Pat.pdf';

const Blog20150918 = {
  id: 20150918,
  title: 'Letters of Support',
  type: 'letter',
  publishDate: '2015-09-18',
  headerImage,
  summary: 'Look inside for our letters of support.',
  body: [
    {
      type: 'pdf',
      title: 'Letter from Commissioner Nick Fish',
      file: LetterFromNick
    },
    {
      type: 'divider'
    },
    {
      type: 'pdf',
      title: 'Letter from Pat',
      file: LetterFromPat
    }
  ]
}

export default Blog20150918;