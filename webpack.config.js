var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var config = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},// creates style nodes from JS strings
          {loader: "css-loader"}, // translates CSS into CommonJS
          {loader: "sass-loader"} // compiles Sass to CSS
        ]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      },
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.(styl|css|scss)$/,
          /\.json$/,
          /\.bmp$/,
          /\.gif$/,
          /\.jpe?g$/,
          /\.png$/
        ],
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  );
}

module.exports = config;
