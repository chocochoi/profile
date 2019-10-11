const path = require('path');
const webpack = require('webpack');
const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

const commonsChunkConfig = (config, test = /\.css$/) => {
  config.plugins = config.plugins.map(plugin => {
      if (
          plugin.constructor.name === 'CommonsChunkPlugin' &&
          plugin.minChunks != null
  ) {
      const defaultMinChunks = plugin.minChunks;
      plugin.minChunks = (module, count) => {
          if (module.resource && module.resource.match(test)) {
              return true;
          }
          return defaultMinChunks(module, count);
      };
  }
  return plugin;
  });
  return config;
};

module.exports = withCSS(withSass({
  webpack: (config, { isServer }) => {
      config = commonsChunkConfig(config, /\.(sass|scss|css)$/)
      config.resolve.alias = {
        '@styles': path.join(__dirname, 'assets/styles'),
        '@': path.join(__dirname, 'components'),
      }
      return config
  }
}))