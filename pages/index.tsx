import type { NextPage, GetStaticProps } from 'next';
import Intro from '@includes/intro';
import { allBlogs } from 'contentlayer/generated';
import type { Blog } from 'contentlayer/generated';
import Posts from '@includes/posts';
import Tags from '@includes/tags';
import { allTags, customize } from '_api';
import { sort } from 'helper';
import { IPosts } from '@types';
import { NextSeo } from 'next-seo';

const Home: NextPage<IPosts> = ({ posts, tags, settings }: IPosts) => {
  return (
    <>
      <NextSeo
        title={`${customize.home.title}`}
        description={`${customize.home.description}`}
        canonical={`${customize.url}`}
        openGraph={{
          url: `${customize.url}`,
        }}
      />
      <Intro />
      <Tags data={tags} title="Topic" />
      <Posts data={posts} option={settings} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const tags = await allTags();
  const settings = customize.home;

  const blogPosts = allBlogs.filter((post: Blog) => post.type === 'Blog');

  const posts = sort(
    blogPosts,
    settings.postsSort,
    settings.postsOrder,
  ).slice(0, settings.postsPerPage);

  return { props: { posts, tags, settings } };
};

export default Home;
