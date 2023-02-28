const { merge } = require('webpack-merge');
const electronCommon = require('./electron.common');
const dev = require('./dev');

module.exports = merge(electronCommon, dev);
