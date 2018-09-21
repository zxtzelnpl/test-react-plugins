const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    "index": path.resolve(__dirname, 'src/index.tsx')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader:'postcss-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
            }
          },
          {
            loader:'postcss-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  /*输出*/
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },

  /*插件*/
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/template/index.ejs')
    }),

    /*热加载*/
    // new webpack.HotModuleReplacementPlugin()
  ],

  /*在线服务*/
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}
