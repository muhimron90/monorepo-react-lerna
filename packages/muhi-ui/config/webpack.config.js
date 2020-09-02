const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  target: 'web',
  mode: 'development',
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  devtool: 'source-map',
};
