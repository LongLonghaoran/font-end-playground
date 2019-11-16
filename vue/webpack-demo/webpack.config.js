const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another_module.js'
  },
  optimization: {
    splitChunks: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Code Splitting'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};