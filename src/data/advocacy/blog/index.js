import _ from 'lodash';
import AdvocacyBlog201906191 from './2019-06-19-1';
import AdvocacyBlog201906192 from './2019-06-19-2';
import AdvocacyBlog201906193 from './2019-06-19-3';
import AdvocacyBlog201906194 from './2019-06-19-4';
import AdvocacyBlog201906195 from './2019-06-19-5';
import AdvocacyBlog20190628 from './2019-06-28';
import AdvocacyBlog20190701 from './2019-07-01';
import AdvocacyBlog20190709 from './2019-07-09';

const allPosts = [
  AdvocacyBlog20190709,
  AdvocacyBlog20190701,
  AdvocacyBlog20190628,
  AdvocacyBlog201906195,
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
