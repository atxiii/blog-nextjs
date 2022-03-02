import { allBlogs } from '.contentlayer/generated';
import yaml from 'js-yaml';
import allConfig from '../config.yml';

export const allTags = () => {
  const tags: string[] = [];

  allBlogs.map(item => {
    return tags.push(...item.tag);
  });

  return Array.from(new Set(tags));
};

export function getYamlConfig() {
  console.log(allConfig);
  return yaml.load(allConfig);
}
