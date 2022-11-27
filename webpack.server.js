const path = require('path');

module.exports = {
  // we are building a bundle for nodeJS and not for brower
  target: 'node',

  // root file of our server application
  entry: './src/index.js',

  // location of output file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] }}] 
          ]
        }
      }
    ]
  }

};
