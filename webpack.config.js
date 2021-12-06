const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootPath = path.resolve(__dirname, 'src')
const nodeModulesPath = path.resolve(__dirname, 'node_modules')

module.exports = {
  context: rootPath,
  mode: 'development',
  entry: {
    createjs: path.join(nodeModulesPath, '/createjs/builds/createjs-2015.11.26.combined.js'),
    app: path.join(rootPath, '/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'game_dist'),
    filename: '[name].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    client: {
      progress: true,
    },
    hot: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /node_modules(\/|\\)(createjs)(\/|\\).*\.js$/,
        loader: 'imports-loader',
        options: {
          additionalCode: 'window.createjs = {};',
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Plants VS Zombies (createjs version)',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    alias: {
      '@': rootPath,
      '@createjs/EaselJS': path.resolve(rootPath, 'createjs'),
      '@createjs': path.resolve(rootPath, 'createjs'),
    },
  },
}