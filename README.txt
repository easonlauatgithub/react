------------------------------
Testing - component Counter
------------------------------
npm install --save-dev @testing-library/react@9.1.4
npm install @testing-library/jest-dom@4.1.0 --save-dev
// jest ^29.3.1 > 28
npm i jest-environment-jsdom --save-dev

------------------------------
Testing - Mock
------------------------------
npm install uuid@3.3.3 --save

------------------------------
Testing - Jest
------------------------------
npm install jest --save-dev

/__tests__/index.test.js
----
import { add, sub } from '../src/utils/math';

describe('Check add', () => {
    beforeEach(() => {
        console.log('每次執行測試前執行哦');
    });
    
    afterAll(() => {
        console.log('所有測試結束後才看得見我');
    });

    test('Check the result of 5 + 2', () => {
        expect(5 + 2).not.toBe(8);
    });
    
    test('Check the result of 5 + 3', () => {
        expect(5 + 3).toBe(8);
    });

  });
  
  describe('Check sub', () => {
    test('Check the result of sub(5,2)', () => {
      expect(sub(5,2)).not.toBe(1);
    });
  
    test('Check the result of sub(5,3)', () => {
      expect(sub(5,3)).toBe(2);
    });
  });
----

/utils/math.js
----
export const add = (a, b) => a + b;

export const sub = (a, b) => a - b;
----

.babelrc.js
----
module.exports = {
    presets: ['@babel/preset-env'],
};
----

------------------------------
SPA - Router
------------------------------
npm i react-router-dom@5.0.1 --save

webpack.config.js
----
module.exports = {
  // ...
  // default import js only, added resolve to import jsx
  resolve: { extensions: ['.js', '.jsx'] },
}
----

------------------------------
Redux - redux-saga async
------------------------------
npm install --save redux-saga
----
npm install --save @babel/polyfill // @babel/polyfill handles Generator Function
----
function printNumber() {
  for (let i = 0; i <= 10; i += 1) {
    console.log(i);
  }
}
printNumber() // 0 1 2 3 ... 10
----
function* printNumber() {
  for (let i = 0; i <= 10; i += 1) {
    yield console.log(i);
  }
}
const iteratorA = printNumber(); // 將 printNumber 的執行交給
// 接著每一次執行 .next() 都會到 Generator Function 中的 yield，然後停住
iteratorA.next() // 0
// 下一次執行 .next() 時又會執行到 yield，然後停住
iteratorA.next() // 1
// 依此類推，一直到 10
iteratorA.next() // 10
// 再來就沒有了
iteratorA.next()
----
module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  //...
----  

------------------------------
Redux - applyMiddleWare
------------------------------
npm i --save redux-logger

------------------------------
Redux
------------------------------
npm install --save redux react-redux

------------------------------
Prop-types
------------------------------
npm install --save prop-types

------------------------------
Hot reload
------------------------------
npm install webpack-dev-server --save-dev

webpack.config.js
----
module.exports = {
    // ....
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  devServer: {
    // contentBase: './dist',
    static: './dist',
    port: 8080,
  },
};
----

 package.json
----
"scripts": {
  // ....
    "start": "webpack-dev-server",
    "start:dev3": "webpack-dev-server",
    "start:dev4": "webpack serve",
},
----
npm run start

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