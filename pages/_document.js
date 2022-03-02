import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Zen+Kaku+Gothic+Antique:wght@400&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="dark:bg-skyly flex flex-col h-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
