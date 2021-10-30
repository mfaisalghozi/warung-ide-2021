const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { webpack } = require("webpack");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  devServer: {
    port: 8585,
    client: {
      webSocketTransport: 'ws',
    },
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["vue-style-loader", "css-loader"] },
      { test: /\.less$/i, use: [ 'style-loader', 'css-loader', 'less-loader']}
    ]
  }
});