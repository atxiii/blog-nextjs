import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { allTags } from '_api';
import { IPosts } from '@types';
const Tag: NextPage<IPosts['tags']> = ({ tags }: IPosts['tags']) => {
  return (
    <div>
      <h1 className="font-display text-xl md:text-4xl my-10">All Tags</h1>
      {tags.map((tag: string, key: Number) => {
        return (
          <Link href={`tag/${tag}`} key={key + 'tagArchive'}>
            <a title={tag} className="pr-3">
              {tag}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const tags = allTags();
  return { props: { tags } };
};

export default Tag;
