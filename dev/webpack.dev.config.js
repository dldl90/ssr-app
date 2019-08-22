const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './dev/index.js',
  },
  output: {
    filename: 'app-compiled.js',
    path: path.resolve(__dirname, 'build'),
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    module: 'empty',
    os: 'empty',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Visualizer({
      filename: './stats.html',
    }),
  ],
};
