const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    app: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  //devtool: 'source-map',
  //module: {
    //rules: [
      //{
        //test: /\.css$/,
        //use: ['style-loader', 'css-loader']
      //},
      //{
        //test: /\.(js|jsx)$/,
        //exclude: /node_modules/,
        //loader: 'babel-loader'
      //},
      //{
        //test: /\.(png|jpg|jpeg|gif|svg)$/,
        //loader: 'file-loader'
      //},
      //{
        //test: /\.(ttf|eot|svg|woff(2)?)$/,
        //loader: 'file-loader'
      //}
    //]
  //},
  plugins: [
    //new webpack.DefinePlugin({
      //'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    //}),
    //new webpack.optimize.CommonsChunkPlugin({
      //name: 'vendor',
      //minChunks: module => (
        //module.context && module.context.indexOf('node_modules') !== -1
      //)
    //}),
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: {
      disableDotRule: true
    },
    watchOptions: {
      ignored: /node_modules/
    }
  }
}

module.exports = config
