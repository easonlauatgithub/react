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