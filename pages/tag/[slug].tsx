import { allBlogs } from '../../.contentlayer/generated';
import { allTags } from '_api';
import Link from 'next/link';
import { IParam, IPosts } from 'types';
import { GoBack } from '@includes/goBack';
interface tagParams {
  posts: IPosts['posts'];
  tag: IParam;
}

export default function PageTag({ posts, tag }: tagParams) {
  return (
    <section>
      <h1 className="text-xl md:text-4xl capitalize font-display my-4">
        {tag}'s Post
      </h1>
      <div className="w-full h-[2px] bg-onion my-3"></div>
      <ul className="marker:text-onion list-decimal list-outside pl-4">
        {posts.map((item: any) => {
          return (
            <li key={item._id} className="py-3">
              <Link href={'/blog/' + item.slug}>
                <a className="block text-lg">{item.title}</a>
              </Link>
              <p className="mb-3 text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </li>
          );
        })}
      </ul>
      <GoBack className="!mt-20" />
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
  const posts = allBlogs.filter(p => p.tag.includes(params.slug));

  return {
    props: {
      posts,
      tag: params.slug,
    },
  };
};
