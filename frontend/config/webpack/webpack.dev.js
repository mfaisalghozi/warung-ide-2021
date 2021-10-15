const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    client: {
      webSocketTransport: 'ws',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ["vue-style-loader", "css-loader"] },
      { test: /\.less$/i, use: [ 'style-loader', 'css-loader', 'less-loader']}
    ]
  }
});