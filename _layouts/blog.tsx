import Head from 'next/head';
import { ReactChild, ReactFragment, ReactPortal, ReactNode } from 'react';
import type { Blog } from './../.contentlayer/generated';
interface BlogLayoutProps {
  blog?: Blog;
  children:
    | ReactNode
    | boolean
    | ReactChild
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}

const BlogLayout = ({ children, blog }: BlogLayoutProps) => {
  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
      </Head>

      <article>{children}</article>
    </>
  );
};

export default BlogLayout;
