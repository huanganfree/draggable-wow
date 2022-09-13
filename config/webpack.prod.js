/** TODO: 
 * 1.每次build清除dist目录
 * 2.自动移除debugger，log等调试语句
 * 3.script标签引入，直接挂载到window上。（已做）
 */
const path = require('path')

module.exports = {
  entry: {
    main: './src/draggable.js',
  },
  mode: 'production',
  output: {
    filename: 'index.js',
    path: path.resolve('./dist'),
    library: {
      name: 'Draggable',
      type: 'umd',
      export: 'default' // 这里配置的是哪个暴露的模块，挂载在模块的library.name上
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