const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Effective Workouts',
      base: '/',
    }),
  ],
  devServer: {
    static: './dist',
  },
});
