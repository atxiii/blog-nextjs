import Link from 'next/link';
interface allTags {
  data: string[];
}

const Tags = ({ data }: allTags) => {
  return (
    <div className="flex mt-10 border-t border-b border-onion py-4 px-4 font-display">
      <div className="uppercase mr-auto w-1/3">topics</div>
      <div className="w-2/3 text-right">
        {data.map((tag: any, i) => {
          return (
            <Link href={`/tag/${tag}`} key={i + '_tag'}>
              <a className="cursor-pointer px-4 ">{tag}</a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
