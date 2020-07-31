const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src/assets"),
        components: path.resolve(__dirname, "src/components"),
        configurations: path.resolve(__dirname, "src/configurations"),
        contexts: path.resolve(__dirname, "src/contexts"),
        hooks: path.resolve(__dirname, "src/hooks"),
        sections: path.resolve(__dirname, "src/sections"),
        styles: path.resolve(__dirname, "src/styles"),
        types: path.resolve(__dirname, "src/types"),
        utils: path.resolve(__dirname, "src/utils"),
      },
    },
  });
};
