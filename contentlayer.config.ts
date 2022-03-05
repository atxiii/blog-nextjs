import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import mdxOptions from './data/config/mdx';
import readingTime from 'reading-time';

export const Customize = defineDocumentType(() => ({
  name: 'Customize',
  contentType: 'data',
  filePathPattern: 'config/**/*.yml',
  fields: {
    home: { type: 'json' },
    title: { type: 'string' },
    description: { type: 'string' },
    gridOfPosts: { type: 'string' },
    mobile: { type: 'string' },
    tablet: { type: 'string' },
    desktop: { type: 'string' },
    footerText: { type: 'string' },
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
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blog, Customize],
  mdx: mdxOptions,
});