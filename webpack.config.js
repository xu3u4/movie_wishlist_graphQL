const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const environment = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:3000',
    './src/js/index.js'
  ],
  output: {
    filename: 'movie.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' //where index.html is
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: [/node_modules/],
        options: {
          emitError: true,
          emitWarning: true,
          failOnError: false
        }
      },
      {
        test: /\.jsx?$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          'babel-loader'
        ] //preset is better to be set in .babelrc, it will be easier to manage if there are more than one env
      },
      {
        test: /\.scss$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    hot: true,
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    contentBase: path.join(__dirname, "dist")
  },
  resolve: {
    modules: [ 'src/js', 'node_modules' ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname+'/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
