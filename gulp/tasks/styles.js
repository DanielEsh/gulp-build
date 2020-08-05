const gulp = require('gulp')
const plumber = require('gulp-plumber')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const shorthand = require('gulp-shorthand')
const autoprefixer = require('gulp-autoprefixer')

module.exports = function styles() {
    return gulp.src('src/styles/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(shorthand())
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    }))
    .pipe(gulp.dest('build/css'))

}