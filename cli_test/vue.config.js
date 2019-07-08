/* config for postcssNormalize moved to postcss.config.js */
// const postcssNormalize = require("postcss-normalize");

// module.exports = {
//   css: {
//     loaderOptions: {
//       postcss: {
//         plugins: () => [postcssNormalize({ forceImport: false })]
//       }
//     }
//   }npm
// };
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  configureWebpack: {
    plugins: [new CompressionPlugin({})] //compress every file to gzip with [name].[ext].gz
  }
};
