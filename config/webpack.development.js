const { join } = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')
module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: join(__dirname, '../dist'),
    hot: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new WebpackBuildNotifierPlugin({
      title: 'My Project Webpack Build',
      // logo: path.resolve('./img/favicon.png'),
      suppressSuccess: true
    })
  ]
}
