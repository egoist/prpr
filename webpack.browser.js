var path = require('path')
var webpack = require('webpack')
var config = require('./webpack.base')
config.devtool = 'source-map'
config.output.library = 'PrPr'
config.output.libraryTarget = 'var'
config.output.path = path.resolve('./dist')
config.output.filename = 'prpr.min.js'
config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
)
module.exports = config
