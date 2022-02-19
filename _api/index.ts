import matter from 'gray-matter';
import { marked } from 'marked';
import yaml from 'js-yaml';

export async function getAllPosts(tag: string = '') {
  // Dependency management by webpack..  has 3 properties: resolve, keys, id
  const context = require.context('../_posts', false, /\.md$/);

  const contextWithPostLink = context
    .keys() // returns an array of all possible requests that the context module can handle.
    .slice(context.keys().length / 2); // there are two type of data in array. one of them is like '_posts/blog.md' and another is like './blog.md'

  const posts = [];
  const allTags = [];

  for (const item of contextWithPostLink) {
    // item is like: _posts/blog.md,
    // so for get the name of blog we have to slice 7 char from start => blog.md
    // because if we don't use ../_posts/ in import function, the webpack will mixed up!! I don't know why. also they don't know
    const post = item.slice(7);

    // import post
    const content = await import(`../_posts/${post}`);

    // get all meta of yaml by matter
    const meta: any = matter(content.default);

    // make slug without extenstion.
    const slug: string = post.replace('.md', '');

    // sanitize space and make tags array
    const tags = meta.data.tag
      .replace(' ', ',')
      .replace(',,', ',')
      .split(',');

    allTags.push(...tags);

    // Filter via tag
    if (tag && !tags.includes(tag) && tag !== 'all') continue;

    // Don't you know about it really? damn now we have to push data to posts.
    posts.push({
      id: slug,
      slug,
      tags,
      title: meta.data.title,
      date: meta.data.date,
    });
  }

  // return just tags
  if (tag === 'tags') return Array.from(new Set(allTags));

  // return tags with posts
  if (tag === 'all')
    return {
      tags: Array.from(new Set(allTags)),
      posts,
    };

  // return posts
  return posts;
}

export async function getPostBySlug(slug: string) {
  const fileContent = await import(`../_posts/${slug}.md`);
  const meta = matter(fileContent.default);
  const title = meta.data.title;
  const description = meta.data.description;
  const content = marked.parse(meta.content);

  return { title, content, description };
}

export async function getConfig() {
  const config = await import('../config.yml');
  return yaml.load(config.default);
}
