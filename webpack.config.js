const path = require("path");

module.exports = {
  entry: {
    main: "./src/js/general.js",
  },


  output: {
    filename: "bundle.js",
    chunkFilename: "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: require.resolve("babel-loader"),
          query: {
            presets: [
              ["@babel/preset-env", { modules: false }]
            ],
            plugins: [
              [
                "@babel/plugin-proposal-decorators",
                {
                  "legacy": true
                }
              ],
              "@babel/plugin-proposal-class-properties",
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      }
    ]
  },

  resolve: {
    alias: {
      "%modules%": path.resolve(__dirname, "src/blocks")
    }
  }
};
