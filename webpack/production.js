const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    publicPath: '/effective-workout-game',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Effective Workouts',
      base: '/effective-workout-game',
    }),
  ],
});
