import _ from 'lodash';
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
  Blog20170419
]

export const posts = _.chunk(allPosts, 5);

export const postMap = {};

allPosts.forEach(post => {
  postMap[post.id] = post;
})