const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => ({
  mode: env.production ? "production" : "development",
  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, env.production ? "dist" : "tmp"),
    clean: true,
  },
  devtool: env.production ? 'source-map' : 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      inject: 'body'
    })
  ]  
});
