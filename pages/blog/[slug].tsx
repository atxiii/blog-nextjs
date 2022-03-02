import BlogLayout from '@layouts/blog';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { allBlogs } from '../../.contentlayer/generated';
import type { Blog } from '../../.contentlayer/generated';
type BlogProps = {
  blog: Blog;
};

<<<<<<< HEAD
interface Params {
  params: {
    slug: string;
  };
}

export default function Post(props: any) {
=======
export default function Blog({ blog }: BlogProps) {
  const Component = useMDXComponent(blog.body.code);
>>>>>>> temp
  return (
    <BlogLayout blog={blog}>
      <Component />
    </BlogLayout>
  );
}

<<<<<<< HEAD
export async function getStaticProps(context: Params) {
=======
export const getStaticPaths = async () => {
>>>>>>> temp
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
