const path = require('path');
module.exports = {
  entry: "./src/backdrop.js",
  output: {
  	filename: "bundle.js",
    path: path.resolve(__dirname, 'dist', 'bundle')
  },
  devtool: 'source-map'
};
