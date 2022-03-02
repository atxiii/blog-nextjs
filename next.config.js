const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy:
      "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = withContentlayer()({
  nextConfig,
});
