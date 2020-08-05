const gulp = require('gulp')
const webpack = require('webpack-stream')
const eslint = require('gulp-eslint')

module.exports = function script() {
    return gulp.src('src/js/index.js')
      .pipe(webpack({
        mode: process.env.NODE_ENV,
        output: {
          filename: 'index.min.js',
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            }
          ]
        }
      }))
      .pipe(gulp.dest('build/js'))
  }