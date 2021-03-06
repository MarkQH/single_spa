const webpack = require("webpack");
const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const QiankunEntryPlugin = require('./plugins/qiankun-entry-plugin');
const config = require('../../config/dev.config');
module.exports = {
  mode: 'development',
  module: {
    rules: [
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader'] },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
    ]
  },
  devtool: "eval-source-map",
  devServer: {
    // open: true,
    port: config.ports['subapp_b_port'],
    hot: true,
    disableHostCheck: true,
    overlay: true,
    clientLogLevel: "error",
    // contentBase: resolve(__dirname, '../public'),
    watchContentBase: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  plugins: [
    new QiankunEntryPlugin({target: 'main'}),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}