import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import mdxOptions from './config/mdx';
import readingTime from 'reading-time';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  contentType: 'mdx',
  filePathPattern: `blogs/**/*.mdx`,
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
  contentDirPath: '_posts',
  documentTypes: [Blog],
  mdx: mdxOptions,
});
