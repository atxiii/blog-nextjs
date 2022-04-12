import { allBlogs } from 'contentlayer/generated';
import { allTags } from '_api';
import Link from 'next/link';
import { IParam, IPosts } from 'types';
import { GoBack } from '@includes/goBack';
import { formatDate } from 'helper/util';
import tw, { styled } from 'twin.macro';
import { useEffect } from 'react';
import { revealAnimation } from 'helper/animations/reveals';
import { LinkIcon } from '@includes/Icons/linkIcon';
interface tagParams {
  posts: IPosts['posts'];
  tag: IParam;
}
const beforeDefualt = `relative text-sm before:text-skyly before:absolute before:-top-11`;

const ReadingTIME = tw.p`${beforeDefualt} before:content-['Reading'] md:col-span-1 col-span-3`;
const BlogTitle = tw.a`${beforeDefualt} before:content-['Title'] before:text-sm block text-lg md:col-start-2 md:col-span-8 col-start-4 col-span-12`;
const Tags = tw.ul`${beforeDefualt} md:before:content-['Tags'] col-span-3 md:col-span-1 col-start-1`;
const Published = tw.time`${beforeDefualt} md:before:content-['Published'] col-start-4  col-span-8 md:col-span-1 self-end`;
export default function PageTag({ posts, tag }: tagParams) {
  useEffect(() => {
    revealAnimation();
  });
  return (
    <section className="gs_reveal md:mt-40 mt-20">
      <h1 className="text-4xl md:text-7xl capitalize font-display mt-4 mb-20 text-center">
        {tag}'s Post
      </h1>

      <ul className="marker:text-onion list-outside pl-4 ">
        {posts.map((item: any, num) => {
          const beforeStatus = +num < 1 ? 'before:block' : 'before:hidden';
          return (
            <li key={item._id} className="py-6  border-t">
              <article className="grid-cols-12 grid">
                <ReadingTIME className={beforeStatus}>
                  {item.readingTime.text}
                </ReadingTIME>
                <BlogTitle
                  href={'/blog/' + item.slug}
                  className={beforeStatus}
                >
                  {item.title}
                </BlogTitle>

                <Tags className={beforeStatus}>
                  {item.tag.map((list: any) => {
                    return (
                      <li key={'tag_' + list.replace(' ', '_')}>{list}</li>
                    );
                  })}
                </Tags>

                <Published
                  dateTime={item.publishedAt}
                  className={beforeStatus}
                >
                  {item.publishedAt && formatDate(item.publishedAt)}
                </Published>

                <Link href={'/blog/' + item.slug}>
                  <a className="flex justify-center md:self-center self-end">
                    <LinkIcon />
                  </a>
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
      <GoBack className="!mt-20" />
    </section>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allTags().map(tag => ({ params: { slug: tag } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: IParam) => {
  const posts = allBlogs.filter(p => p.tag.includes(params.slug));

  return {
    props: {
      posts,
      tag: params.slug,
    },
  };
};
