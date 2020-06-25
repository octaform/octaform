import "dotenv/config";
import webpack from "webpack";
import CopyWebpackPlugin from "copy-webpack-plugin";
import GenerateJsonPlugin from "generate-json-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import path from "path";
import banner from "./banner";
import Pkg from "../../package.json";

const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const config = {
  mode: "production",
  entry: {
    octaform: Pkg.main,
  },
  resolve: {
    modules: ['./node_modules'],
    extensions: ['.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    library: capitalize(Pkg.name),
    libraryTarget: 'umd',
    libraryExport: "default",
    umdNamedDefine: true,
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: /@license/i,
          },
        },
        extractComments: false,
        sourceMap: false,
      }),
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: ["README.md", "LICENSE"].map(file => ({ from: file })),
    }),
    new GenerateJsonPlugin(
      'package.json', 
      Object.assign({}, Pkg, {
        main: `${Pkg.name}.js`,
        scripts: {},
        devDependencies: {}
      })
    ),
    new webpack.DefinePlugin({
      REPO_URL: JSON.stringify(Pkg.repository.url),
      VERSION: JSON.stringify(Pkg.version)
    }),
    new webpack.BannerPlugin({
      banner: banner(),
      raw: true,
    })
  ],
}

export default config;
