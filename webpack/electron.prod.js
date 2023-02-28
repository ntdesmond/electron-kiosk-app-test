const { merge } = require('webpack-merge');
const electronCommon = require('./electron.common');
const production = require('./production');

module.exports = merge(electronCommon, production);
