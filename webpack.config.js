const path = require('path')

module.exports = {
    entry: {
      main: './src/main.js',
    },
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
      hot: true
    }
};