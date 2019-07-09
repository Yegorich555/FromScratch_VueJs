const CompressionPlugin = require("compression-webpack-plugin");
const getScopedName = require("./getScopedName");

const isDev = process.env.NODE_ENV === "development";
module.exports = {
  configureWebpack: {
    plugins: [new CompressionPlugin({})] //compress every file to gzip with [name].[ext].gz
  },
  css: {
    loaderOptions: {
      css: {
        ...(isDev ? {} : { getLocalIdent: getScopedName })
      }
    }
  }
};
