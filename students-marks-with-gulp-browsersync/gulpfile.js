const { src, dest, series, parallel, watch } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

function copyJsTask() {
    return src('./src/**/*.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('./dist'));
}
function copyHtmlTask() {
    return src('./src/**/*.html')
        .pipe(dest('./dist'))
}

function copyCssTask() {
    return src('./src/**/*.css')
        .pipe(dest('./dist'))
}

function buildTask() {
    return parallel(copyJsTask, copyHtmlTask, copyCssTask);
}

function executeTask(done) {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    watch('./src/**/*.js', series(copyJsTask, reloadPage));
    watch('./src/**/*.html', series(copyHtmlTask, reloadPage));

    done();
}

function reloadPage(done) {
    browserSync.reload();
    done();
}

module.exports = {
    build: buildTask(),
    start: series(buildTask(), executeTask)
}
