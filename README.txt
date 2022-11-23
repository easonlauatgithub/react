------------------------------
SASS
------------------------------
npm install node-sass
index.scss
----
.main {
    color: #aaf;

    .point {
        color: #faf;
    }
}
----
package.json
----
{
  /* 其他省略 */
  "scripts": {
    "build-css": "node-sass src/index.scss src/index.css",
  },
  /* 其他省略 */
}
----
npm run build-css
//Webpack 編譯 JSX 的時候，一併將 SCSS 也編譯成 CSS 
npm install style-loader css-loader sass-loader --save-dev
npm install mini-css-extract-plugin --save-dev

webpack.config.js
----
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
----
module: {
  rules: [
     /* 其餘省略（ JSX , JS loader 設定） */
    {
      test: /\.css$/,
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
      ],
    },
  ]
}
----
module.exports = {
  /* 其餘省略 */
  plugins: [
    new MiniCssExtractPlugin({
      filename: './index.css',
    }),
  ],
};
----
module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
  },
  /* 其餘省略 */
}
----

 src/index.jsx
----
import styles from './index.css';
----

dist/index.html
----
    <head>
        //...
        <link rel="stylesheet" href="./index.css">
    </head>
----

------------------------------
SASS2
------------------------------
webpack.config.js
----
module.exports = {
  /* 其餘省略 */
  module: {
    rules: [
      {
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
};
----

 src/index.jsx
----
import styles from './index.scss';
----


------------------------------
react
------------------------------
npm install react --save
npm install react-dom --save
npm install @babel/preset-react --save-dev
webpack.config.js
----
module.exports = {
  entry: './src/index.jsx',
}
----
module.exports = {
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
      {
        test: /.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },      
    ],
  },
----

------------------------------
babel
------------------------------
npm install @babel/runtime --save-dev
npm install @babel/core @babel/cli --save-dev
npm install @babel/preset-env --save-dev
npm install babel-loader --save-dev
webpack.config.js
----
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
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },  
};
----
npm run buildprd

------------------------------
eslint 
------------------------------
npm install eslint --save-dev
// global
// npm install eslint --save-dev -g
----
package.json {
    "scripts": {
        "eslintInit": "eslint --init"
    }
}
----
npm run eslintInit
----
How would you like to use ESLint? ...
> To check syntax, find problems, and enforce code style
What type of modules does your project use? ...
> JavaScript modules (import/export)
Which framework does your project use? ...
> React
Does your project use TypeScript?
No
Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Browser
How would you like to define a style for your project? ...
> Use a popular style guide
Which style guide do you want to follow? ...
> Airbnb: https://github.com/airbnb/javascript
What format do you want your config file to be in? ...
> JavaScript
----
package.json {
    "scripts": {
        "lint": "eslint src/*.js"
    }
}
----
npm run lint
----
checking for error and warning

------------------------------
webpack
------------------------------
npm install webpack webpack-cli --save-dev
----
package.json 
{
    "scripts": {
        "help": "webpack --help",
        "build": "webpack",
        "builddev": "webpack --mode=development",
        "buildprd": "webpack --mode=production"
    }
}
----
npm run buildprd

------------------------------
init 
------------------------------
npm init -y