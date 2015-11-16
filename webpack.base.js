var path = require('path')

module.exports = {
  entry: ['./src/index'],
  output: {
    path: './',
    filename: 'index.js',
    library: true,
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'] }
    ]
  },
  babel: {
    stage: 0,
    optional: ['runtime']
  },
  plugins: []
}
