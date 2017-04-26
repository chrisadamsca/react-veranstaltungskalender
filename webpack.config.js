var path = require("path");

var DIST_DIR = path.resolve (__dirname, "dist");
var SRC_DIR = path.resolve (__dirname, "src");

var config = {
  entry: SRC_DIR + "/app-client.js",
  output: {
    path: DIST_DIR + "/static",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-2"]
        }
      }
    ]
  }
}

module.exports = config;
