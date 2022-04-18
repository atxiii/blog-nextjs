import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypePrism],
  compilers: [],
};

export default mdxOptions;
