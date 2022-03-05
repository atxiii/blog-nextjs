import BlogLayout from '@layouts/blog';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allBlogs } from '../../.contentlayer/generated';
import type { Blog } from '../../.contentlayer/generated';
type BlogProps = {
  blog: Blog;
};

export default function Blog({ blog }: BlogProps) {
  const Component = useMDXComponent(blog.body.code);
  return (
    <BlogLayout blog={blog}>
      <Component />
    </BlogLayout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allBlogs.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const blog = allBlogs.find(p => p.slug === params.slug);
  return {
    props: {
      blog,
    },
  };
};
