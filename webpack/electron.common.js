const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  target: 'electron-main',
  entry: {
    electron: './src/electron.ts',
    preload: './src/preload.ts',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
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
    new ESLintWebpackPlugin({
      extensions: ['ts', 'tsx'],
      exclude: 'node_modules',
    }),
  ],
  output: {
    path: path.resolve(__dirname, '..', 'build'),
    filename: '[name].js',
    clean: true,
  },
};
