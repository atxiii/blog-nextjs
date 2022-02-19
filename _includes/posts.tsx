import Link from 'next/link';

interface allPosts {
  posts: [
    {
      slug: string;
      id: string;
      title: string;
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
              <a className="cursor-pointer">{post.title}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
