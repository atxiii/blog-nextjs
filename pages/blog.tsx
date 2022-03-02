import type { NextPage, GetStaticProps } from 'next';
import { allBlogs } from '../.contentlayer/generated';
import type { Blog } from '../.contentlayer/generated';
import Posts from '@includes/posts';
import { allTags } from '_api';

interface IProps {
  //tags: [{ slug: string; id: string; title: string }];
  posts: Blog[];
  tags: string[];
}

const BlogPage: NextPage<IProps> = ({ posts, tags }: IProps) => {
  return <Posts data={posts} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const tags = allTags();
  const posts = allBlogs.filter((post: Blog) => post.type === 'Blog');
  return { props: { posts, tags } };
};

export default BlogPage;
