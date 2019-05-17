import _ from 'lodash';
import Blog20150803 from './2015-08-03';
import Blog20150805 from './2015-08-05';
import Blog20150825 from './2015-08-25';
import Blog20150830 from './2015-08-30';
import Blog20150901 from './2015-09-01';
import Blog20150918 from './2015-09-18';
import Blog20150919 from './2015-09-19';
import Blog20151111 from './2015-11-01';
import Blog20160127 from './2016-01-27';
import Blog20160819 from './2016-08-19';
import Blog20160920 from './2016-09-20';
import Blog20170113 from './2017-01-13';
import Blog20170115 from './2017-01-15';
import Blog20170117 from './2017-01-17';
import Blog20170418 from './2017-04-18';
import Blog20170419 from './2017-04-19';
import Blog20171006 from './2017-10-06';
import Blog20171007 from './2017-10-07';
import Blog20180514 from './2018-05-14';
import Blog20180518 from './2018-05-18';

// Imagine if we had a CMS

const allPosts = [
  Blog20180518,
  Blog20180514,
  Blog20171007,
  Blog20171006,
  Blog20170419,
  Blog20170418,
  Blog20170117,
  Blog20170115,
  Blog20170113,
  Blog20160920,
  Blog20160819,
  Blog20160127,
  Blog20151111,
  Blog20150919,
  Blog20150918,
  Blog20150901,
  Blog20150830,
  Blog20150825,
  Blog20150805,
  Blog20150803
];

export const posts = _.chunk(allPosts, 5);

export const postMap = {};

allPosts.forEach(post => {
  postMap[post.id] = post;
});
