module.exports = {
  mode: "development",
  entry: "./script.js",
  output: {
    path: __dirname,
    filename: "build3.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
