import { Pluggable } from 'unified';
import { remarkCodeHike } from '@code-hike/mdx';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeHighlight from 'rehype-highlight';
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';
import remarkParse from 'remark-parse';

import theme from '../../code-hike-theme';

import remarkGfm from 'remark-gfm';

const mdxOptions = {
  remarkPlugins: [remarkGfm, [remarkCodeHike, { theme }]],
  rehypePlugins: [] as Pluggable[],
  compilers: [],
};

export default mdxOptions;
