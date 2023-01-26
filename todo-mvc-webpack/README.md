HOW TO USE THE WEBPACK
1) npm init -y to create the package.json file
2) npm i webpack webpack-cli --save-dev
3) create a default folder src
4) run using node ./node_modules/.bin/webpack
5) add script command to the package json, ex. "build"
6) run using npm run build

WEBPACK CONFIG JS
1) create webpack.config.js file
2) add the path/module exports in the webpack.config.js
3) fill the file with details https://webpack.js.org/concepts/configuration/
4) configure the dev server npm install --save -dev webpack-dev-server
5) add the config devServer details
6) add command to the script to webpack serve - "start": "webpack serve --open"
7) install the plugin html webpack: npm install --save -dev html-webpack-plugin
8) add plugin details to the webpack config
9) add style and css plugin/loader npm install --save-dev style-loader css-loader
10) add import css to the index.js file 
11) npm install --save -dev html-loader

Advantages:
- no need to add uglify or other things used for gulp
- it knows what to do ang how to do it (code optimization)