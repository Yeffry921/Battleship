const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Battleship',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html',
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']}, 
      { test: /\.css$/, use: ['style-loader', 'css-loader']}
    ],
  },
  mode: 'development'
}