const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: ["babel-polyfill", "./index.js"],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["source-map-loader"],
        enforce: "pre",
      },
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.jsx?$/, // a regular expression that catches .js files
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    port: 3000, // most common port
    contentBase: "./public",
    inline: true,
  },
};
