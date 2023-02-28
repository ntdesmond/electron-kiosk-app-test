const path = require('path');
const webpack = require('webpack');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  target: 'electron-main',
  entry: './src/electron.ts',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new ESLintWebpackPlugin({
      extensions: ['ts', 'tsx'],
      exclude: 'node_modules',
    }),
  ],
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'electron.js',
    clean: true,
  },
};
