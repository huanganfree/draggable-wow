/**
 * TODO: 1.每次build清除dist目录
 * 2.自动移除debugger，log语句
 */
const path = require('path')

module.exports = {
  entry: {
    main: './src/draggable.js',
  },
  mode: 'production',
  output: {
    filename: 'draggable.min.js',
    path: path.resolve('./dist'),
    library: {
      name: 'Draggable',
      type: 'umd'
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};