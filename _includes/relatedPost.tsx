import { allBlogs, Blog } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';

export const RelatedPost = ({ tag, title }: Blog) => {
  const blogTags = tag;
  const posts = [...allBlogs];
  let related = [];

  related = posts
    .filter(item => {
      const tag = item.tag.filter((t: string) => blogTags.includes(t));
      if (tag.length >= 1 && title !== item.title) return true;
    })
    .slice(0, 4);

  return (
    <>
      <section className="min-h-[200px] mt-[100%] relative">
        <div className="rotateText absolute flex -rotate-180 -translate-x-10 h-fit text-onion text-2xl ">
          Related Posts
        </div>
        <span className="h-[2px] w-20 mb-[5px] mr-[5px] block"></span>
        {related.length === 0 ? (
          <span>Nothing...</span>
        ) : (
          related.map(item => {
            return (
              <Link href={item.slug} key={item._id}>
                <a className="text-md mb-2  underline underline-offset-1 block group">
                  {item.title}
                  <figure className=" mix-blend-difference rounded-md absolute bottom-[110%] opacity-0 -translate-x-[140%]  transition ease-out-in duration-700 group-hover:opacity-100 group-hover:translate-x-[-20]  w-full  pr-10">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width="100px"
                      height="100%"
                      layout="responsive"
                      objectFit="contain"
                      className="bg-stone-900 rounded-md"
                    />
                  </figure>
                </a>
              </Link>
            );
          })
        )}
      </section>
    </>
  );
};
