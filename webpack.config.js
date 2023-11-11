const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  // specify the entry point of your application
  entry: "./src/index.html",
  // specify the output path and filename of the bundled file
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  // specify the loaders to transform your files
  module: {
    rules: [
      // use babel-loader to transpile JavaScript files
      {
        test: /\.html$/,
        use: "html-loader",
        // test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // use css-loader and style-loader to load CSS files
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // specify the plugins to enhance your bundling process
  plugins: [
    // use HtmlWebpackPlugin to generate an HTML file
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
