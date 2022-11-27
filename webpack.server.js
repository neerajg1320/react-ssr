const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  // we are building a bundle for nodeJS and not for brower
  target: 'node',

  // root file of our server application
  entry: './src/index.js',

  // location of output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
};

module.exports = merge(baseConfig, config);
