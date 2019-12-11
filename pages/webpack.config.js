const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = [{
  name: 'default',
  entry: {
    docs: './src/scripts/docs.js',
    worker: './src/scripts/worker.js',
    download: './src/scripts/download.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public', 'scripts')
  },
  resolve: {
    enforceExtension: false,
    enforceModuleExtension: false,
    extensions: ['.js'],
    modules: ['node_modules']
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  }
}]
