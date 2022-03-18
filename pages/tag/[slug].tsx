import { allBlogs } from '../../.contentlayer/generated';
import type { Blog } from '../../.contentlayer/generated';
import { allTags } from '_api';
import Link from 'next/link';
import { IParam } from 'types';
type BlogProps = {
  blogs: Blog[];
  tag: string;
};

export default function PageTag({ blogs, tag }: BlogProps) {
  return (
    <section>
      <h1 className="text-xl md:text-4xl capitalize font-display my-4">
        {tag}'s Post
      </h1>
      <div className="w-full h-[2px] bg-onion my-3"></div>
      <ul className="marker:text-onion list-decimal list-outside pl-4">
        {blogs.map(tag => {
          return (
            <li key={tag._id} className="py-3">
              <Link href={'/blog/' + tag.slug}>
                <a className="block text-lg">{tag.title}</a>
              </Link>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                {tag.description}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: allTags().map(tag => ({ params: { slug: tag } })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: IParam) => {
  const blogs = allBlogs.filter(p => p.tag.includes(params.slug));

  return {
    props: {
      blogs,
      tag: params.slug,
    },
  };
};
