const webpackDevConfig = require('./config/webpack.dev');
const webpackProdConfig = require('./config/webpack.prod')


module.exports = (env) =>  {
  return env.production ? webpackProdConfig : webpackDevConfig
};