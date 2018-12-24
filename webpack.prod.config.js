const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  resolve: {
    alias: {
      Styles: path.resolve(__dirname, 'src/css/'),
      Scripts: path.resolve(__dirname, 'src/js/')
    }
  },
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
    {
      test: /\.css$/,
      exclude: /(node_modules|bower_components)/,
      include: path.resolve(__dirname, 'src'),
      use: [
        'style-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 9', 'last 4 version'],
                }),
              ],
            },
          }],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/',
          },
        }],
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            publicPath: '/',
          },
        }],
    },
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react']
        }
      }]
    }
  ]
},
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
      }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.[hash].css',
      chunkFilename: '[id].css',
    }),
  ]
}
