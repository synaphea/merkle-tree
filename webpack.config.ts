import * as path from 'path';
import * as webpack from 'webpack';

const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

declare var __dirname: any;

const config: webpack.Configuration = {
  target: 'node',
  context: `${__dirname}/src/`,
  entry: './App.ts',
  module: {
    rules: [{
      exclude: /node_modules/,
      loader: 'awesome-typescript-loader',
      test: /\.ts(x?)$/
    }]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new NpmInstallPlugin({
      // Use --save or --save-dev
      dev: false,
      // Install missing peerDependencies
      peerDependencies: true,
      // Reduce amount of console logging
      quiet: false,
      // npm command used inside company, yarn is not supported yet
      npm: 'npm'
    })
  ]
};

export default config;
