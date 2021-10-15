const VueLoaderPlugin = require("vue-loader/lib/plugin")

module.exports = {
  entry: {
    main: "./src/main.js",
    vendor: "./src/vendor.js"
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader" },
      { test: /\.vue$/, use: "vue-loader" },
      { test: /\.less$/i, use: [ 'style-loader', 'css-loader', 'less-loader']},
      { test: /\.(svg|jpg|jpeg|png|gif)(\?.*$|$)/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
            esModule: false
          }
        }
      },
      { test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "fonts",
            esModule: false
          }
        }
      },

    ]
  }
};