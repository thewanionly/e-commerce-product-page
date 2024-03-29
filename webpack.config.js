const HtmlWebPackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  filename: './index.html'
})
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.(png|jpg)$/,
        use: ['url-loader?limit=8192']
      }
    ]
  },
  plugins: [htmlPlugin],
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  }
}
