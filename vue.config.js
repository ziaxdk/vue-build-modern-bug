const fs = require('fs')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin')

module.exports = {
   configureWebpack: {
      plugins: [
          // Error with --modern
         new HtmlWebpackPlugin({
            filename: './index2.html',
            template: './public/index2.html',
            excludeAssets: /.js$/
         }),
         new HtmlWebpackExcludeAssetsPlugin(),
      ]
   },
}
