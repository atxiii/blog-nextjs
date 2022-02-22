import BlogLayout from '@layouts/blog';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Blog, getAllBlogs } from 'contentlayer/generated';

interface Context {
  params: {
    slug: string;
  };
}

export default function Post(props: any) {
  return (
    <BlogLayout
      title={props.title}
      content={props.content}
      description={props.description}
    />
  );
}

export async function getStaticProps(context: Context) {
  return {
    props: await getPostBySlug(context.params.slug),
  };
}

export async function getStaticPaths() {
  const posts = await getAllBlogs();
  console.log(posts);
  let paths: { params: { slug: any } }[] = [];

  if (Array.isArray(posts)) {
    paths = posts.map(item => ({
      params: {
        slug: item.slug,
      },
    }));
  }

  return {
    paths,
    fallback: true, // false or 'blocking'
  };
}
