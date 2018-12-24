const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    compress: true,
    port: 92,
    host: '0.0.0.0',
    overlay: true,
    hot: true,
    stats: 'errors-only',
  },
  resolve: {
    alias: {
      Styles: path.resolve(__dirname, 'src/styles/'),
      Scripts: path.resolve(__dirname, 'src/scripts/'),
      Images: path.resolve(__dirname, 'src/images/'),
      Fonts: path.resolve(__dirname, 'src/fonts/'),
      Pages: path.resolve(__dirname, 'src/pages/')
    }
  },
  output: {
    filename: '[name].bundle.js',
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
        'css-hot-loader',
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
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
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
      }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].bundle.css',
      chunkFilename: '[id].css',
    })
  ]
}
