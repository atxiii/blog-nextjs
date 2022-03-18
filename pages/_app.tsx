import '../styles/globals.css';
import '@code-hike/mdx/dist/index.css';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

import Layout from '@layouts/layout';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
