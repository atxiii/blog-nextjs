import type { Blog } from '../.contentlayer/generated';
import Card from './card';
import Link from 'next/link';
import { getYamlConfig } from '_api';
import { config } from 'process';
interface AllPosts {
  data: Blog[];
}

export default function Posts({ data }: AllPosts) {
  const config = async () => {
    console.log(await getYamlConfig());
    // return await getYamlConfig();
  };

  config();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-around my-8 px-4">
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
