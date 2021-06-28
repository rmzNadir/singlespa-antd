const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const webpack = require('webpack');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'sfleet',
    projectName: 'test',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      // fix "process is not defined" error:
      // (do "npm install process" before running the build)
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
    ],
  });
};
