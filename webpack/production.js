const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      base: '/effective-workout-game',
    }),
  ],
});
