import { GetStaticPaths, GetStaticProps } from 'next';
import { allBlogs, Blog } from 'contentlayer/generated';
import { allTags, customize } from '_api';
import { IPosts } from '@types';
import Posts from '@includes/posts';
import Tags from '@includes/tags';
import Pagination from '@includes/pagination';
import { sort } from 'helper/util';
import { NextSeo } from 'next-seo';

const settings = customize.archive;
const POSTS_PER_PAGE = settings.postsPerPage;

export default function ArchivePage({
  posts,
  tags,
  totalPages,
  currentPage,
  settings,
}: IPosts) {
  const canonical =
    currentPage == 1
      ? `${customize.url}/blog/`
      : `${customize.url}/blog/page-${currentPage}`;

  const titlePage =
    currentPage == 1
      ? settings.title
      : `${settings.title}, Page[${currentPage}]`;

  return (
    <div className="pb-20 block">
      <NextSeo
        title={titlePage}
        description={settings.description}
        canonical={canonical}
        openGraph={{
          url: `${customize.url}/blog`,
        }}
      />
      <h1 className="text-5xl mb-10 mt-20 font-display">{titlePage}</h1>
      <Tags data={tags} title={'Tags'} />
      <Posts data={posts} option={settings} />
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Array.from(
    { length: Math.ceil(allBlogs.length / POSTS_PER_PAGE) },
    (_, i) => ({
      params: {
        page: i === 0 ? undefined : [`page-${i + 1}`],
      },
    }),
  );

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // collect All Tags
  const tags = allTags();

  // Sort Posts
  const sortedPosts = sort(
    allBlogs,
    settings.postsSort,
    settings.postsOrder,
  );

  const [, page] = params?.page?.[0]?.split('-') ?? [, 1];

  const posts = sortedPosts.slice(
    ((page as number) - 1) * POSTS_PER_PAGE,
    (page as number) * POSTS_PER_PAGE,
  );

  return {
    props: {
      posts,
      totalPages: Math.ceil(allBlogs.length / POSTS_PER_PAGE),
      currentPage: parseInt(page as string, 10),
      tags,
      settings,
    },
  };
};
