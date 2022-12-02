const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          // Webpack 在編譯時能夠設定 loader 使用 Babel
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        // test: /\.css$/,
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: '[name]__[local]___[hash:base64:5]' },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },

    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './index.css',
    }),
  ],
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devServer: {
    // contentBase: './dist',
    static: './dist',
    port: 8080,
  },
  // default import js only, added resolve to import jsx
  resolve: { extensions: ['.js', '.jsx'] },  
};
