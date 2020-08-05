const gulp = require('gulp')

const imgMin = require('./imgMin')
const styles = require('./styles')
const pug2html = require('./pug2html')
const scripts = require('./scripts')

const server = require('browser-sync').create()

function readyReload(cb) {
    server.reload()
    cb()
  }
  
  module.exports = function serve(cb) {
      server.init({
          server: 'build',
          notify: false,
          open: true,
          cors: true
      })
  
      gulp.watch('src/img/*.{gif,png,jpg,svg,webp}', gulp.series(imgMin, readyReload))
      gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
      gulp.watch('src/js/**/*.js', gulp.series(scripts, readyReload))
      gulp.watch('src/pages/**/*.pug', gulp.series(pug2html, readyReload))
  
      return cb()
  }