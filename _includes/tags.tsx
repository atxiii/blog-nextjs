import { Customize } from 'contentlayer/generated';
import Link from 'next/link';

interface allTags {
  data: string[];
  title: Customize['title'];
}

const Tags = ({ data, title }: allTags) => {
  return (
    <section className="flex md:mb-20 my-10 border-t border-b border-onion py-4 px-4 font-display relative after:absolute after:w-20 after:md:content-none after:h-full after:right-0 after:top-0 after:bg-gradient-to-r after:from-transparent after:to-white after:md:to-transparent dark:after:to-skyly">
      <span className="uppercase mr-auto w-1/3 font-display">{title}</span>
      <div className="w-1/2 md:w-2/3 text-right overflow-x-auto scroll-mr-12 scroll-pr-6 scroll-pl-6 snap-x pr-10 md:pr-0 no-scrollbar ">
        {data.map((tag: any, i) => {
          return (
            <Link href={`/tag/${tag}`} key={i + '_tag'}>
              <a className="cursor-pointer snap-center px-4 !capitalize">
                {tag}
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Tags;
