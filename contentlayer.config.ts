import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import mdxOptions from 'config/mdx';
import readingTime from 'reading-time';

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `blogs/**/*.mdx`,
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'string', required: true },
    description: { type: 'string', required: true },
    cover: { type: 'string', required: true },
    tag: { type: 'string' },
  },
  computedFields: {
    readingTime: {
      type: 'json',
      resolve: doc => readingTime(doc.body.raw),
    },
  },
}));

export default makeSource({
  contentDirPath: '_posts',
  documentTypes: [Blog],
  mdx: mdxOptions,
});
