const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const production = require('./production');

module.exports = merge(common, production, {
  devtool: 'source-map',
});
