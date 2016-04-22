var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve('./public');

var config = {
  entry: './app/app.js',
  output: {
    path: BUILD_DIR,
    filename: '/app_packed.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
    ]
  }
};

module.exports = config;
