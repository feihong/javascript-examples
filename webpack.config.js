var path = require('path')
var webpack = require('webpack')
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")

// All apps that need to be built by WebPack are listed here.
const APPS = [
  'lazy-js',
  'wu',
  'what-am-i',
  'flexbox',
  'form',
  'meetup-calc',
  'emoji-browser',
  'random-emoji',
  'jplayer',
  'jplayer-react',
]
var entry = APPS.reduce((result, app) => {
  result[app] = `./site/${app}/app.babel`
  return result
}, {})
entry.vendor = [
  'react',
  'react-dom',
  'lodash',
  'lazy.js',
  'underscore.string',
]

module.exports = {
  // devtool: '#source-map',
  entry: entry,
  output: {
    path: path.resolve('site'),
    filename: '[name]/bundle.js'
  },
  plugins: [
    new CommonsChunkPlugin('vendor', 'js/vendor.bundle.js')
  ],
  resolve: {
    alias: {
      lib: path.resolve('site/lib')
    },
    extensions: ["", ".webpack.js", ".web.js", ".js", '.babel']
  },
  module: {
    loaders: [
      {
        test: /\.babel$/,
        include: [
          path.resolve('site')
        ],
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
          cacheDirectory: true
        }
      }
    ]
  }
}
