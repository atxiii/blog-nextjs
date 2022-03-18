import { NextSeo } from 'next-seo';
import { BlogLayoutProps } from '@types';
import Head from 'next/head';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';
import { formatDate } from 'helper';
import { customize } from '_api';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ArticleContainer = tw.article`flex flex-wrap mt-28 mb-40`;
const Details = tw.aside`md:w-1/3 w-full`;
const titleCss = tw`text-onion dark:text-gray-100 font-display mt-8 mb-4 font-bold`;
const Content = styled.section`
  ${tw`md:w-2/3 w-full text-lg`}

  h1 {
    ${titleCss}
    ${tw`text-lg md:text-3xl`}
  }

  h2 {
    ${titleCss}
    ${tw`text-lg md:text-2xl`}
  }

  h3,
  h4,
  h5,
  h6 {
    ${titleCss}
    ${tw`text-lg md:text-xl`}
  }

  a {
    ${tw`text-onion underline`}
  }
  p {
    ${tw`mb-5 text-[20px] leading-7`}
  }

  b,
  strong {
    ${tw`font-bold`}
  }

  ol {
    ${tw`list-decimal	list-outside`}
    &>li {
      ${tw`my-2`}
    }
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
const ListContainer = tw.ul`flex flex-col`;
const ListItem = tw.li`mb-5`;
const ListItemLabel = tw.span`block text-gray-500 text-sm md:text-lg mb-0 font-display`;
const Item = tw.span`block text-black text-lg md:text-xl dark:text-white`;

const BlogLayout = ({ children, blog }: BlogLayoutProps) => {
  const router = useRouter();

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

      <section className="mt-10">
        {blog.cover && (
          <Image
            src={blog.imageUrl}
            width="100%"
            height="50vh"
            layout="responsive"
            alt={blog.title}
            objectFit="cover"
            className="mix-blend-overlay"
            placeholder="blur"
          />
        )}
      </section>

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

            <ListItem>
              <ListItemLabel>Back</ListItemLabel>
              <Item>
                <button type="button" onClick={() => router.back()}>
                  Click here to go back
                </button>
              </Item>
            </ListItem>
          </ListContainer>
        </Details>
        <Content>{children}</Content>
      </ArticleContainer>
    </>
  );
};

export default BlogLayout;
function i(i: any): import('react').ReactNode {
  throw new Error('Function not implemented.');
}
