import BlogLayout from '@layouts/blogLayout';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allBlogs } from '../../.contentlayer/generated';
import type { Blog } from '../../.contentlayer/generated';

type BlogProps = {
  blog: Blog;
};

export default function Article({ blog }: BlogProps) {
  const MdxContent = useMDXComponent(blog.body.code);
  return (
    <BlogLayout blog={blog}>
      <MdxContent />
    </BlogLayout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allBlogs.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const blog = allBlogs.find(p => p.slug === params.slug);
  return {
    props: {
      blog,
    },
  };
};
