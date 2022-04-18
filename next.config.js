const withPlugins = require('next-compose-plugins');
const { withContentlayer } = require('next-contentlayer');
const withTwin = require('./next-twin.js');

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['ironeko.com', 'pexels.com'],
  },
};

const contentLayer = withContentlayer({
  nextConfig,
});

const twin = withTwin(nextConfig);

module.exports = withPlugins([contentLayer, twin], nextConfig);
