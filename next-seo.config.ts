import type { DefaultSeoProps } from 'next-seo';
import { customize } from './_api';
const SEO: DefaultSeoProps = {
  titleTemplate: customize.titleTemplate,
  defaultTitle: customize.home.title,
  description: customize.home.description,
  canonical: customize.url,
  openGraph: {
    type: customize.openGraph.type,
    locale: customize.openGraph.local,
    url: customize.url,
    site_name: customize.openGraph.site_name,
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@0x4b70',
    handle: '@0x4b70',
  },
};

export default SEO;
