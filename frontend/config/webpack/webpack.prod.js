const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const common = require("./webpack.common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin") 
const { merge } = require("webpack-merge")

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  optimization: {
    minimizer: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
     }),
     new OptimizeCssAssetsPlugin(),
     new TerserPlugin(),
   ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name].[hash].css"}),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "vue-style-loader", 
          {
            loader: "css-loader",
            options: { sourceMap: true }
          }
        ]
      },
      { 
        test: /\.less$/i, 
        use: [
          'style-loader', 
          'css-loader', 
          'less-loader',
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "css-loader",
            options: { sourceMap: true }
          },
          {
            loader: "sass-loader",
            options: {
              prependData: `
                @import "./src/assets/styles/_main.scss";
              `
            }
          }
        ]
      }
    ]
  }
});