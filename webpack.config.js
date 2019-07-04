const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'background.js',
  },
  plugins: [
    new CopyPlugin([
      {
        from: './manifest.json',
        to: 'manifest.json',
        toType: 'file',
      },
    ]),
  ],
}
