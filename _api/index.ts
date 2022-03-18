import { allBlogs, allCustomizes } from '.contentlayer/generated';

export const allTags = () => {
  const tags: string[] = [];

  allBlogs.map(item => tags.push(...item.tag));

  return Array.from(new Set(tags));
};

export const customize = allCustomizes[0];
