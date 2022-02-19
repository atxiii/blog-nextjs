import type { NextPage } from 'next';
import Intro from '@includes/intro';
import Posts from '@includes/posts';
import { getAllPosts } from '_api';
import Tags from '@includes/tags';

const Home: NextPage = (props: any) => {
  const { posts, tags } = props;
  return (
    <>
      <Intro />
      <Tags tags={tags} />

      {/* <Posts posts={posts} /> */}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const all = await getAllPosts('all');
  return {
    props: {
      posts: (all as any).posts,
      tags: (all as any).tags,
    },
  };
}
