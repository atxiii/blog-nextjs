import type { NextPage, GetStaticProps } from 'next';
import Intro from '@includes/intro';
import { allBlogs } from '../.contentlayer/generated';
import type { Blog } from '../.contentlayer/generated';
import Posts from '@includes/posts';
import Tags from '@includes/tags';
import { allTags } from '_api';

interface IProps {
  //tags: [{ slug: string; id: string; title: string }];
  posts: Blog[];
  tags: string[];
}

const Home: NextPage<IProps> = ({ posts, tags }: IProps) => {
  return (
    <>
      <Intro />
<<<<<<< HEAD
      <Tags tags={tags} />

      <Posts posts={posts} />
=======
      <Tags data={tags} />
      <Posts data={posts} />
>>>>>>> temp
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const tags = allTags();
  const posts = allBlogs.filter((post: Blog) => post.type === 'Blog');
  return { props: { posts, tags } };
};

export default Home;
