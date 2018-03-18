const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      test: /\.js($|\?)/i,
      exclude: /node_modules/,
      cache: './.cache',
      sourceMap: false,
      ecma: 5,
      warnings: false,
      compress: {
        drop_console: true,
        drop_debugger: true,
        toplevel: true,
        pure_getters: true,
      },
      mangle: false,
      ie8: true,
      safari10: true,
      toplevel: true,
    }),
  ],
};
