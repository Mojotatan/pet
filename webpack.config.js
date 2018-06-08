const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    app: './src/index.js',
    'production-dependencies': ['phaser']
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        // include: path.resolve(__dirname, 'src/'),
        loader: 'babel-loader',
        exclude: /node-modules/
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'production-dependencies',
      filename: 'dependencies.bundle.js'
    })
  ]
}