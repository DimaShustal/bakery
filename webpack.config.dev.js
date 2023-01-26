const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    'javascript': './js/main.js',
    'stylesheets': './css/stylesheets.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader'
      }, {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          'postcss-loader',
          'sass-loader',
        ]
      }, {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'img/'
        }
      }, {
        test: /\.(eot|ttf|woff|woff2|otf|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'html/index.html',
      inject: 'head',
      chunks: [
        'stylesheets'
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'menu.html',
      template: 'html/menu.html',
      inject: 'head',
      chunks: [
        'javascript',
        'stylesheets'
      ]
    }),
    new CopyWebpackPlugin([
      { from: 'static', to: 'static' },
    ], {})
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
