import { NextSeo } from 'next-seo';
import { BlogLayoutProps } from '@types';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { formatDate } from 'helper';
import { customize } from '_api';
import { RelatedPost } from '@includes/relatedPost';
import { TableOfContent } from '@includes/tableOfContent';
import { renderToString } from 'react-dom/server';
import { GoBack } from '@includes/goBack';
import { useEffect } from 'react';
import { initAnimation } from 'helper/animation';

const ArticleContainer = tw.article`flex flex-wrap md:mt-28 mt-10 mb-40 px-5 md:px-0`;
const Details = tw.aside`md:w-1/3 w-full flex flex-col order-2 md:order-none`;
const titleCss = tw`text-black dark:text-gray-100 font-display mt-8 mb-4 font-bold`;
const Content = styled.section`
  ${tw`md:w-2/3 w-full text-lg text-[20px]`}

  h1 {
    ${titleCss}
    ${tw`text-lg md:text-4xl`}
  }

  h2 {
    ${titleCss}
    ${tw`text-lg md:text-3xl`}
  }

  h3,
  h4,
  h5,
  h6 {
    ${titleCss}
    ${tw`text-lg md:text-2xl`}
  }

  h1,
  h2 {
    ${tw`mt-20 mb-8`}
  }
  h3,
  h4,
  h5,
  h6 {
    ${tw`mt-10 mb-8`}
  }
  img {
    ${tw`my-8`}
  }
  a {
    ${tw`underline`}
  }
  p {
    ${tw`mb-5 leading-7 z-50`}
  }

  b,
  strong {
    ${tw`font-bold`}
  }

  ol {
    ${tw`list-decimal	list-outside font-body`}
    &>li {
      ${tw`my-2 font-body`}
    }
  }

  ul {
    ${tw`font-body mb-5 list-disc list-outside`}
    &>li {
      ${tw``}
    }
  }

  code {
    ${tw`font-body break-words bg-skyly dark:bg-gray-900 text-white text-lg leading-8 rounded px-2`}
  }

  pre {
    ${tw`bg-skyly dark:bg-gray-900 text-white p-4  break-words w-full overflow-scroll my-10 rounded border border-white`}
  }

  blockquote {
    ${tw`border border-l-8 border-gray-400 text-gray-900 dark:text-white my-8 p-4 rounded`}
  }

  blockquote p {
    display: inline;
  }

  table {
    ${tw`table-auto	hover:table-fixed border border-solid min-w-full`}
    &>thead {
      ${tw`bg-gray-200 dark:bg-gray-700 border-b`}
      &>tr>th {
        ${tw`text-sm md:text-lg dark:text-gray-100 text-gray-900 px-6 py-4`}
      }
    }
    & > tbody > tr > td {
      ${tw`text-sm md:text-lg dark:text-gray-100 text-gray-900 px-6 py-4 whitespace-nowrap border-b`}
    }
  }

  .ch-code span {
    ${tw`text-[18px]!`}
  }
`;
const ListContainer = tw.ul`flex flex-col md:mt-0 mt-10`;
const ListItem = tw.li`mb-5`;
const ListItemLabel = tw.span`block text-gray-500 text-sm md:text-lg mb-0 font-display`;
const Item = tw.span`block text-black text-lg md:text-xl dark:text-white`;
const Cover = tw.figure` h-[400px] md:h-[100vh]  w-[30%] overflow-hidden mx-auto sticky top-0`;
const IntroSection = tw.section`mt-10 z-0 md:min-h-[800px] min-h-[100px]`;
const IntroWrap = tw.div`md:w-[80%] w-[90%] text-center mx-auto mb-24 mt-40`;
const BlogLayout = ({ children, blog }: BlogLayoutProps) => {
  const contentString = renderToString(children);
  useEffect(() => {
    initAnimation();
  });
  return (
    <>
      <NextSeo
        title={blog.title}
        description={blog.description}
        canonical={`${customize.url}/${blog.slug}`}
        openGraph={{
          url: `${customize.url}/${blog.slug}`,
          images: [
            {
              url: `${customize.url}${blog.imageUrl}`,
            },
          ],
        }}
      />

      <IntroSection className="gs_reveal">
        <IntroWrap>
          <h1 className="mx-10 text-2xl md:text-4xl mb-4  text-center font-display ">
            {blog.title}
          </h1>
          <div className="text-[14px] mb-10 text-center text-gray-500 ">
            {blog.description}
          </div>
        </IntroWrap>
        <Cover className="hero_cover">
          {blog.cover && (
            <Image
              src={blog.imageUrl}
              layout="fill"
              alt={blog.title}
              className="parallax object-cover"
            />
          )}
        </Cover>
      </IntroSection>

      <ArticleContainer>
        <Details>
          <ListContainer>
            <ListItem>
              <ListItemLabel>Author</ListItemLabel>
              {blog.author && <Item>{blog.author}</Item>}
            </ListItem>
            <ListItem>
              <ListItemLabel>Date</ListItemLabel>
              {blog.publishedAt && (
                <Item>{formatDate(blog.publishedAt)}</Item>
              )}
            </ListItem>
            <ListItem>
              <ListItemLabel>Tag</ListItemLabel>
              {blog.tag && (
                <Item>{blog.tag.map((i: any) => ' ' + i)}</Item>
              )}
            </ListItem>
          </ListContainer>

          <RelatedPost {...blog} />

          <GoBack />
        </Details>
        <Content>
          {blog.tableOfContent === 'on' && (
            <TableOfContent content={contentString} />
          )}
          {children}
        </Content>
      </ArticleContainer>
    </>
  );
};

export default BlogLayout;

function i(i: any): import('react').ReactNode {
  throw new Error('Function not implemented.');
}
