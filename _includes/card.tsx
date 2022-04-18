import { formatDate } from 'helper/util';
import Image from 'next/image';
import Link from 'next/link';
import { revealAnimation, imageAnimation } from 'helper';
import { useEffect } from 'react';
const Card = ({ post }: any) => {
  useEffect(() => {
    revealAnimation();
  });

  return (
    <div className="gs_reveal md:p-5 p-3 relative shadow-lg from-white to-slate-50 bg-gradient-to-b  dark:from-zinc-900 dark:to-zinc-800">
      <figure className="relative">
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
        <time
          dateTime={post.publishedAt}
          className=" mt-10 z-10 right-2	text-zinc-500 text-[10px]"
        >
          {post.publishedAt && formatDate(post.publishedAt)}
        </time>
        <Link href={`/blog/${post.slug}`}>
          <a className="cursor-pointer font-display capitalize text-md md:text-2xl mb-5 block min-h-[80px] md:min-h-[100px]">
            {post.title}
          </a>
        </Link>

        <div className="flex flex-wrap flex-end mt-10">
          <Link href={`/blog/${post.slug}`}>
            <a className="cursor-pointer font-body text-sm md:text-md  mb-3 block text-zinc-900 dark:text-white">
              <div className="w-full h-[1px] bg-onion"></div>
              Read more
            </a>
          </Link>

          <span className="ml-auto text-zinc-900 dark:text-white text-sm md:text-md">
            {post.readingTime.text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
