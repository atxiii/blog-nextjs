import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import tw from 'twin.macro';
import { customize } from '_api';

const Item = styled.li`
  ${tw`pl-0 my-3`}

  &.number {
    ${tw`hidden md:inline-block`}
  }

  &::before {
    ${tw`hidden!`}
  }
`;

const ItemLink = styled.a`
  ${tw`rounded-full no-underline! text-center inline-block border border-solid p-1 w-8 h-8 text-sm hover:border-b-onion hover:border-b-2`}

  &.current {
    ${tw`bg-gray-100 text-black`}
  }
`;

type PaginationProps = {
  basePath?: string;
  prefix?: string;
  totalPages: number;
  currentPage: number;
  nextPath?: string;
};

const Pagination = ({
  basePath = '/blog/',
  prefix = 'page-',
  totalPages,
  currentPage,
  nextPath = '/blog/[[...page]]',
}: PaginationProps) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const prevLink =
    isFirstPage || currentPage === 2
      ? basePath
      : `${basePath}${prefix}${currentPage - 1}`;
  const nextLink = isLastPage
    ? `${basePath}${prefix}${currentPage}`
    : `${basePath}${prefix}${currentPage + 1}`;

  if (totalPages === 1) return null;

  return (
    <nav className="flex justify-center my-20">
      <ul className="list-none m-0 p-0 flex">
        {totalPages > customize.acitveArrowPaginationAfter && (
          <>
            <li>
              {isFirstPage ? (
                ''
              ) : (
                <Link href={nextPath} as={basePath} passHref>
                  <a
                    title="First Page"
                    className={currentPage === 1 ? 'disabled' : ''}
                  >
                    ⇤
                  </a>
                </Link>
              )}
            </li>

            <li>
              {isFirstPage ? (
                ''
              ) : (
                <Link href={nextPath} as={prevLink} passHref>
                  <a
                    title="Previous Page"
                    className={currentPage === 1 ? 'disabled' : ''}
                  >
                    ←
                  </a>
                </Link>
              )}
            </li>
          </>
        )}

        {[...Array(totalPages)].map((_val, page) => {
          const pageLink =
            page === 0 ? basePath : `${basePath}${prefix}${page + 1}`;

          return (
            <li key={page} className="number">
              <Link href={nextPath} as={pageLink} passHref>
                <ItemLink
                  title={`Go to Page ${page + 1}`}
                  className={currentPage === page + 1 ? 'current' : ``}
                >
                  {page + 1}
                </ItemLink>
              </Link>
            </li>
          );
        })}

        {totalPages > customize.acitveArrowPaginationAfter && (
          <>
            <li>
              {isLastPage ? (
                ''
              ) : (
                <Link href={nextPath} as={nextLink} passHref>
                  <a
                    title="Next Page"
                    className={
                      currentPage === totalPages ? 'disabled' : ''
                    }
                  >
                    →
                  </a>
                </Link>
              )}
            </li>
            <li>
              {isLastPage ? (
                ''
              ) : (
                <Link
                  href={nextPath}
                  as={`${basePath}${prefix}${totalPages}`}
                  passHref
                >
                  <a
                    title="Last Page"
                    className={
                      currentPage === totalPages
                        ? 'disabled text-white'
                        : ''
                    }
                  >
                    ⇥
                  </a>
                </Link>
              )}
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
