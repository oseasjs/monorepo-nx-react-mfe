const withModuleFederationWrapper = require('@nrwl/react/module-federation');
const moduleFederationConfig = require('./module-federation.config');

const moduleFederationPromise = withModuleFederationWrapper({
  ...moduleFederationConfig,
  remotes: [],
});

const loadWebpackConfig = async () => {
  /** Override since withModuleFederation is an explicit functional wrapper */
  const withModuleFederation = await moduleFederationPromise;
  return (config) => {
    /* Add ability to load custom fonts **/
    config.module.rules.push({
      test: /\.(woff|woff2|otf)$/,
      use: {
        loader: 'url-loader',
      },
    });
    return withModuleFederation(config);
  };
};

module.exports = loadWebpackConfig();
