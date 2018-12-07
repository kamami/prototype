
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
  context: path.join(__dirname, "public", "javascripts"),
  entry: "app",
  output: {
    path: path.join(__dirname, "public", "javascripts"),
    filename: "bundle.js"
  },
  module: {
    exprContextRegExp: /^/,
   exprContextCritical: false,
    loaders: [
      { test: /\.jsx/, loader: "jsx-loader?harmony"}
    ]
  },
  resolve: {
    // You can now require('file') instead of require('file.coffee')
    extensions: ["", ".js", ".jsx"],
    root: [path.join(__dirname, "public", "javascripts")],
    modulesDirectories: ["node_modules"]
  },
  externals: {
      // global app config object
      config: JSON.stringify({
          apiUrl: 'http://localhost:3000'
      })
  }
}];
