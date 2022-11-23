const path = require('path');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          //Webpack 在編譯時能夠設定 loader 使用 Babel
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },  
};