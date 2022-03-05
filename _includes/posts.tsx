import type { Blog } from '../.contentlayer/generated';
import Card from './card';
import Link from 'next/link';
import { customize } from '_api';
interface AllPosts {
  data: Blog[];
}

export default function Posts({ data }: AllPosts) {

  const grid = `grid grid-cols-${customize.home.gridOfPosts.mobile} md:grid-cols-${customize.home.gridOfPosts.desktop} md:gap-12 gap-6 my-8`
  
  return (
    <>
      <div
        className={grid}
      >
        {data.map((post: any) => {
          return (
            <div key={post._id}>
              <Card post={post} />
            </div>
          );
        })}
      </div>
      <div className="flex w-full justify-end items-center h-40 pr-4">
        <div className="w-20 h-[2px] bg-gray-500 mr-4"></div>
        <Link href="/blog">
          <a title="view all blog" className="text-onion">
            View All
          </a>
        </Link>
      </div>
    </>
  );
}
