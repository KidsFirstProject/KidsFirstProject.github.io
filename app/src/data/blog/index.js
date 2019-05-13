import _ from 'lodash';
import Blog20180518 from './2018-05-18';

// Imagine if we had a CMS

const allPosts = [
  Blog20180518
]

export const posts = _.chunk(allPosts, 5);

export const postMap = {};

allPosts.forEach(post => {
  postMap[post.id] = post;
})