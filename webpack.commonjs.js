var webpack = require('webpack')
var config = require('./webpack.base')
config.plugins.push(
  new webpack.NoErrorsPlugin()
)
module.exports = config
