import { allBlogs, allCustomizes } from 'contentlayer/generated';

export const allTags = () => {
  const tags: string[] = [];

  // get and push tags
  allBlogs.map(item => tags.push(...item.tag));

  // remove duplicate tags and return it
  return Array.from(new Set(tags));
};

export const customize = allCustomizes[0];
