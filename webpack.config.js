const merge = require('webpack-merge')
const argv = require('yargs-parser')(process.argv.slice(2))

const mode = argv.mode || 'development'
const _mergeConfig = require(`./config/webpack.${mode}.js`)
const { resolve } = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')

const webpackConfig = {
  entry: {
    app: resolve('./src/web/index.tsx')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: resolve('src'),
        exclude: /node_modules/,
        // loader: 'awesome-typescript-loader'
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [new CheckerPlugin()]
}
module.exports = merge(webpackConfig, _mergeConfig)
