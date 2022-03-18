import rehypeCodeTitles from 'rehype-code-titles';
import { Pluggable } from 'unified';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

const mdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeCodeTitles,
    rehypePrism,
    rehypeAccessibleEmojis,
  ] as Pluggable[],
  compilers: [],
};

export default mdxOptions;
