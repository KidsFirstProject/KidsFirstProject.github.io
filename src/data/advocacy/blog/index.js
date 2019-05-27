import _ from 'lodash';

const allPosts = [];

export const posts = _.chunk(allPosts, 5);

export const postMap = {};

allPosts.forEach(post => {
  postMap[post.id] = post;
});
