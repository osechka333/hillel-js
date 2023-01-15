HOW TO CONFIGURE GULP and CHECK IT

1) create package json
npm init -y where -y means agreed to ALL default responses
2) install gulp and gulp cli
npm i gulp gulp-cli --save-dev
npm install gulp-cli
3) add file gulpfile.js
4) how to build the project - node module - bin - gulp
npm run ./node_modules/.bin/gulp
node ./node_modules/.bin/gulp
5) add command to the script in package json (build)
"build": 'gulp",
"build2": "node ./node_modules/.bin/gulp" ( the same as first)
6) run using with command // npm run build
7) run the separate task: npm run build TASK_NAME (from gulpfile)

HOW TO BUILD THE PROJECT

1) connect the library gulp in gulp file
2) select all js files and make a single oner
3) create dist folder
4) install gulp concat npm install --save-dev gulp-concat
5) install gulp uglify 
6) add watch function
7) browser sync install npm i browser-sync --save - dev

RUN - nom run build