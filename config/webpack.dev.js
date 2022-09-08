const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      main: './src/main.js',
    },
    mode: 'development',
    output: {
      filename: 'dev.[name].[contenthash].js',
      path: __dirname + '/dist',
    },
    plugins: [new HtmlWebpackPlugin({
      template: 'index.html'
    })],
    devServer: {
      port: 9000,
      hot: true,
    }
};