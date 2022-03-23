const path = require('path');
const { NextConfig } = require('next');

module.exports = function withTwin() {
  return nextConfig => {
    return {
      ...nextConfig,

      webpack(config, options) {
        const { dev } = options;

        // replace your directories
        const componentsDir = path.resolve(__dirname, '_includes');
        const pagesDir = path.resolve(__dirname, 'pages');
        const layoutDir = path.resolve(__dirname, '_layout');

        config.module = config.module || {};
        config.module.rules = config.module.rules || [];
        config.module.rules.push({
          test: /\.(tsx|jsx)$/,
          include: [componentsDir, pagesDir, layoutDir],
          use: [
            options.defaultLoaders.babel,
            {
              loader: 'babel-loader',
              options: {
                sourceMaps: dev,
                plugins: [
                  [
                    require.resolve('babel-plugin-macros'),
                    {
                      twin: {
                        perest: 'emotion',
                      },
                    },
                  ],
                  [
                    require.resolve('@babel/plugin-syntax-typescript'),
                    { isTSX: true },
                  ],
                ],
              },
            },
          ],
        });

        if (typeof nextConfig.webpack === 'function') {
          return nextConfig.webpack(config, options);
        } else {
          return config;
        }
      },
    };
  };
};
