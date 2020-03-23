const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const config = {
  mode: "production",
  entry: './src/index.js',
  output: {
    // path.join() 去拼接路径
    // __dirname 当前文件的绝对路径
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }, {
        test: /\.(jpg|png|svg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 5,
          },
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './index.html' }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config