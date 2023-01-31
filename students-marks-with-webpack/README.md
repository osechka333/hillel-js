HOW TO USE THE WEBPACK
1) npm init -y to create the package.json file
2) npm i webpack webpack-cli --save-dev
3) create a default folder src
4) add script commands to package.json
"scripts": {
"build": "webpack",
"start": "webpack serve --open"
5) create webpack.config.js file
6) add the path/module exports in the webpack.config.js
7) fill the file with details https://webpack.js.org/concepts/configuration/
8) npm install --save -dev webpack-dev-server
9) npm install --save -dev html-webpack-plugin
10) npm install --save -dev html-loader
11) npm install --save-dev style-loader css-loader