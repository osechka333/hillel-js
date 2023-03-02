const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();


function copyJsTask() {
  return src([
    './node_modules/jquery/dist/jquery.min.js',
    './src/view/**/*.js',
    './src/model/**/*.js',
    './src/Controller.js',
    './src/index.js',
  ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest('./dist'))
}

function copyHtmlTask() {
  return src('./src/index.html')
    .pipe(dest('./dist'))
}

function buildTask() {
   return parallel(copyJsTask, copyHtmlTask)
}

function serveTask(done) {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });

  watch('./src/**/*.js', series(copyJsTask, reloadBrowser));
  watch('./src/index.html', series(copyHtmlTask, reloadBrowser));

  done();
}

function reloadBrowser(done) {
  browserSync.reload();
  done();
}

module.exports = {
  build: buildTask(),
  start: series(buildTask(), serveTask),
}