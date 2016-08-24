var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './client',
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style!css!sass' },
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: path.join(__dirname, './priv/static/js/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './priv/static/js/',
    hot: true
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
