import _ from 'lodash';
import AdvocacyBlog201906191 from './2019-19-06-1';
import AdvocacyBlog201906192 from './2019-19-06-2';
import AdvocacyBlog201906193 from './2019-19-06-3';
import AdvocacyBlog201906194 from './2019-19-06-4';

const allPosts = [
  AdvocacyBlog201906194,
  AdvocacyBlog201906193,
  AdvocacyBlog201906192,
  AdvocacyBlog201906191
];

export const posts = _.chunk(allPosts, 5);

export const postMap = {};

allPosts.forEach(post => {
  postMap[post.id] = post;
});

export const recentPosts = _.take(allPosts, 5);