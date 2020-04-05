const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src/index.jsx"],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          cache: true,
        },
      },
      {
        test: /\.jsx?$/, // a regular expression that catches .js files
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: [
            ["@babel/plugin-proposal-decorators", { legacy: true }],
            ["@babel/plugin-proposal-class-properties", { loose: true }],
          ],
          presets: ["@babel/env", "@babel/react"],
        },
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
