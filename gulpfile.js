var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer');
    sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')

function autoprefix() {
        return gulp.src('scss/main.scss')
            .pipe(sass())
            .pipe(autoprefixer())
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('css/'));
}
function watch() {
        gulp.watch('scss/main.scss', autoprefix );
}
 exports.watch = watch
exports.autoprefix = autoprefix