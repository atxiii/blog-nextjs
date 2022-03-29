import { formatDate } from 'helper/util';
import Image from 'next/image';
import Link from 'next/link';
import { initAnimation } from 'helper/animation';
import { useEffect } from 'react';
const Card = ({ post }: any) => {
  useEffect(() => {
    initAnimation();
  });

  return (
    <div className="gs_reveal md:p-5 p-3 relative shadow-lg from-white to-slate-50 bg-gradient-to-b  dark:from-gray-700 dark:to-gray-800">
      <figure className="relative">
        <time
          dateTime={post.publishedAt}
          className="font-bold mt-2 absolute top-0 z-10 right-2 mix-blend-soft-light	text-gray-300 md:text-lg text-sm"
        >
          {post.publishedAt && formatDate(post.publishedAt)}
        </time>

        {post.imageUrl && (
          <Image
            src={post.imageUrl}
            width={300}
            height={200}
            layout="responsive"
            alt={post.title}
            objectFit="cover"
          />
        )}
      </figure>

      <div className="">
        <Link href={`/blog/${post.slug}`}>
          <a className="cursor-pointer font-display capitalize text-md md:text-2xl my-5 block min-h-[30px] md:min-h-[3rem]">
            {post.title}
          </a>
        </Link>

        <div className="flex flex-wrap flex-end mt-10">
          <Link href={`/blog/${post.slug}`}>
            <a className="cursor-pointer font-body capitalize text-sm md:text-md  mb-3 block text-onion">
              <div className="w-6 h-[2px] bg-onion"></div>
              Read More
            </a>
          </Link>

          <span className="ml-auto text-stone-400 text-sm md:text-md">
            {post.readingTime.text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
