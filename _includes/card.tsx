import Image from 'next/image';
import Link from 'next/link';
const Card = ({ post }: any) => {
  return (
    <div className="p-5 shadow-lg from-white to-slate-50 bg-gradient-to-b  dark:from-gray-700 dark:to-gray-800">
      {post.cover && (
        <Image
          src={post.cover}
          width={300}
          height={200}
          layout="responsive"
          alt={post.title}
          objectFit="cover"
        />
      )}

      <div className="">
        <Link href={`/blog/${post.slug}`}>
          <a className="cursor-pointer font-display capitalize text-md md:text-2xl my-5 block min-h-[80px] md:min-h-[4rem]">
            {post.title}
          </a>
        </Link>

        <Link href={`/blog/${post.slug}`}>
          <a className="cursor-pointer font-body capitalize text-sm md:text-md mt-10 mb-3 block text-onion">
            <div className="w-6 h-[2px] bg-onion"></div>
            Read More
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
