import Layout from './layout';
import Head from 'next/head';
import DOMPurify from 'isomorphic-dompurify';

const BlogLayout = (props: any) => {
  // Sanitize Content
  const content = DOMPurify.sanitize(props.content);

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>

      <article>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </>
  );
};

export default BlogLayout;
