import { allBlogs } from 'contentlayer/generated';
import { allTags } from '_api';
import Link from 'next/link';
import { IParam, IPosts } from 'types';
import { GoBack } from '@includes/goBack';
import { formatDate } from 'helper/util';
import tw, { styled } from 'twin.macro';
import { useEffect } from 'react';
import { revealAnimation } from 'helper/animations/reveals';
interface tagParams {
  posts: IPosts['posts'];
  tag: IParam;
}
const beforeDefualt = `relative text-sm before:text-skyly before:absolute before:-top-11`;

const ReadingTIME = tw.p`${beforeDefualt} before:content-['Reading']`;
const BlogTitle = tw.a`${beforeDefualt} before:content-['Title'] before:text-sm block text-lg col-start-2 col-span-8`;
const Tags = tw.ul`${beforeDefualt} before:content-['Tags']`;
const Published = tw.time`${beforeDefualt} before:content-['Published']`;
export default function PageTag({ posts, tag }: tagParams) {
  useEffect(() => {
    revealAnimation();
  });
  return (
    <section className="gs_reveal mt-40">
      <h1 className="text-xl md:text-7xl capitalize font-display mt-4 mb-20 text-center">
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
                    return <li>{list}</li>;
                  })}
                </Tags>

                <Published
                  dateTime={item.publishedAt}
                  className={beforeStatus}
                >
                  {item.publishedAt && formatDate(item.publishedAt)}
                </Published>

                <Link href={'/blog/' + item.slug}>
                  <a className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 10 10"
                      className="w-3"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.31 1.57H.56V0H10v9.44H8.43V2.7L1.1 10 0 8.89l7.31-7.32z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
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
