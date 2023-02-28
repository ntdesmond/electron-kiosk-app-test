const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const dev = require('./dev');

module.exports = merge(common, dev, {
  target: 'web',
  devServer: {
    static: path.join(__dirname, 'src'),
    historyApiFallback: true,
  },
});
