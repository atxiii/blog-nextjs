import type { Blog, Customize } from '../.contentlayer/generated';
import Card from './card';
import Link from 'next/link';
import { themeGrids } from 'helper';
import { useRouter } from 'next/router';

interface AllPosts {
  data: Blog[];
  option: Customize;
}
// data => posts
// option => theme configuration
export default function Posts({ data, option }: AllPosts) {
  //customize column
  const col = option.gridOfPosts;
  const gridDesktop = themeGrids('desktop', col.desktop);
  const gridTablet = themeGrids('tablet', col.tablet);
  const gridMobile = themeGrids('mobile', col.mobile);

  // Route Configuration
  const router = useRouter();

  // Detect Blog Base Path
  const blogRegex = /\/blog.*/;
  const blogPath = blogRegex.test(router.asPath);

  return (
    <>
      <div
        className={`grid ${gridDesktop} ${gridTablet} ${gridMobile}  my-8`}
      >
        {data.map((post: any) => {
          return (
            <div key={post._id}>
              <Card post={post} />
            </div>
          );
        })}
      </div>

      {/* Show "View All" except "blog/*" path */}
      {!blogPath && (
        <div className="flex w-full justify-end items-center h-40 pr-4">
          <div className="w-20 h-[1px] bg-onion mr-4"></div>
          <Link href="/blog">
            <a
              title="view all blog"
              className="text-black dark:text-white"
            >
              View All
            </a>
          </Link>
        </div>
      )}
      {/* end */}
    </>
  );
}
