const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js','.cjs', '.json']
  },
  devServer: {
  },
  module: {
    rules:[ {
      test: /\.ts$/,
      loader: 'ts-loader'
    }]
  },
  plugins: [
    // 使用index.html 作为HTML模板
   new htmlWebpackPlugin({
     template: './public/index.html'
   })
  ]
}