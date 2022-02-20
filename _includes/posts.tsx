import Link from 'next/link';
import Image from 'next/image';
interface allPosts {
  posts: [
    {
      slug: string;
      id: string;
      title: string;
      date: string;
      cover: string;
    },
  ];
}

export default function Posts({ posts }: allPosts) {
  return (
    <div>
      {posts.map((post: any) => {
        return (
          <div key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              <a className="cursor-pointer">
                {post.title}-{post.date}
                <Image
                  src={`/${post.cover}`}
                  layout="fill"
                  alt={post.title}
                />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
