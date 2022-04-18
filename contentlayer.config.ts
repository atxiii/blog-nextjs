import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import mdxOptions from './config/mdx';
import readingTime from 'reading-time';

export const Customize = defineDocumentType(() => ({
  name: 'Customize',
  contentType: 'data',
  filePathPattern: 'config/**/*.yml',
  fields: {
    url: { type: 'string', required: true },
    darkMode: { type: 'string', required: true },
    home: { type: 'json' },
    title: { type: 'string' },
    description: { type: 'string' },
    gridOfPosts: { type: 'json' },
    mobile: { type: 'string' },
    tablet: { type: 'string' },
    desktop: { type: 'string' },
    footerText: { type: 'string' },
    archive: { type: 'json' },
    postsSort: { type: 'string' },
    postsOrder: { type: 'string' },
    menu: { type: 'json', required: true },
    name: { type: 'string' },
    link: { type: 'string' },
    img: { type: 'string' },
    social: { type: 'json', required: true },
    acitveArrowPaginationAfter: { type: 'number', default: 20 },
  },
}));

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  contentType: 'mdx',
  filePathPattern: 'blogs/**/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    cover: { type: 'string' },
    tag: { type: 'json' },
    author: { type: 'string', required: true },
    tableOfContent: { type: 'string' },
  },
  computedFields: {
    readingTime: {
      type: 'json',
      resolve: doc => readingTime(doc.body.raw),
    },
    slug: {
      type: 'string',
      resolve: doc => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
    path: {
      type: 'string',
      resolve: doc => doc._raw.sourceFileDir,
    },
    imageUrl: {
      type: 'string',
      resolve: doc =>
        `/images/${
          doc._raw.sourceFileDir
        }/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}/${doc.cover}`,
    },
  },
}));

export default makeSource({
  contentDirPath: '.',
  contentDirInclude: ['blogs', 'config'],
  documentTypes: [Blog, Customize],
  mdx: mdxOptions,
});
