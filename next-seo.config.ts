import type { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
  titleTemplate: '%s | MrCatDev',
  defaultTitle: 'MrCatDev',
  description: 'MrCatDev Portfolio',
  canonical: 'mrcatdev.com',
  openGraph: {
    url: 'mrcatdev.com',
    type: 'website',
    locale: 'id_ID',
    site_name: 'mrcatdev',
  },
  twitter: {
    cardType: 'summary_large_image',
    site: '@0x4b70',
    handle: '@0x4b70',
  },
};

export default SEO;
