/* eslint-disable @typescript-eslint/no-var-requires */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPluginConfig = new CleanWebpackPlugin();

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    './src/index.ts'
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    CleanWebpackPluginConfig,
    HTMLWebpackPluginConfig
  ]
};
