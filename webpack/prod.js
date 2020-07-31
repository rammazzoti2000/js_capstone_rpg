/* eslint-disable import/no-extraneous-dependencies, no-unused-vars */

const merge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const base = require('./base');

module.exports = merge(base, {
  mode: 'production',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.min.js',
    // publicPath: './',
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // {
      //   test: /\.json$/i,
      //   loader: 'json-loader',
      //   options: {
      //     esModule: false,
      //   },
      //   type: 'javascript/auto',
      // },
      {
        test: [/\.vert$/, /\.frag$/],
        use: 'raw-loader',
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: 'file-loader',
      },
    ],
  },
  // plugins: [
  //   new CleanWebpackPlugin({
  //     root: path.resolve(__dirname, '../'),
  //   }),
  //   new webpack.DefinePlugin({
  //     CANVAS_RENDERER: JSON.stringify(true),
  //     WEBGL_RENDERER: JSON.stringify(true),
  //   }),
  //   new HtmlWebpackPlugin({
  //     template: './index.html',
  //   }),
  // ],
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
});
