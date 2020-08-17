const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/scripts/main.js',
  resolve: {
    extensions: ['.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};
