const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    components: './src/components/index.js',
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new Visualizer({
      filename: './stats.html',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new CompressionPlugin(),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        cache: true,
        parallel: true,
      }),
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
      umd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
    'styled-components': {
      root: 'styled',
      commonjs2: 'styled-components',
      commonjs: 'styled-components',
      amd: 'styled-components',
      umd: 'styled-components',
    },
    contentstack: {
      root: 'Contentstack',
      commonjs2: 'contentstack',
      commonjs: 'contentstack',
      amd: 'contentstack',
      umd: 'contentstack',
    },
    'regenerator-runtime': {
      commonjs2: 'regenerator-runtime',
      commonjs: 'regenerator-runtime',
      amd: 'regenerator-runtime',
      umd: 'regenerator-runtime',
    },
  },
};
