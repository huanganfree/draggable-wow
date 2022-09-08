/**
 * 1.每次build清除dist目录
 */
const path = require('path')

module.exports = {
    entry: {
      main: './src/draggable.js',
    },
    mode: 'production',
    output: {
      filename: 'draggable.min.js',
      path: path.resolve('./dist')
    }
};