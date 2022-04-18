import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Zen+Kaku+Gothic+Antique:wght@400;700&display=swap"
            rel="stylesheet"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon/apple-touch-icon.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon/favicon-32x32.png"
          ></link>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
          ></link>
          <link rel="manifest" href="favicon/site.webmanifest"></link>
        </Head>
        <body className="dark:bg-skyly flex flex-col h-full overflow-x-hidden">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
