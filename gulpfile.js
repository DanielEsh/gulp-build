/*
Работа с PUG +

работа с SCSS +
Минификация css +
подключение нормалайз ксс +
префиксы +

оптимизация js +
минификация js +
babel +

оптимизация изображений +
копирование шрифтов +


браузерсинк +

npm run start (dev)
npm run build (build)

*/

const gulp = require('gulp')

const pug2html = require('./gulp/tasks/pug2html')
const styles = require('./gulp/tasks/styles')
const scripts = require('./gulp/tasks/scripts')
const fonts = require('./gulp/tasks/fonts')
const imgMin = require('./gulp/tasks/imgMin')
const clean = require('./gulp/tasks/clean')
const watch = require('./gulp/tasks/watch')

// module.exports.start = gulp.series(pug2html)
// module.exports.start = gulp.series(styles)
// module.exports.start = gulp.series(scripts)
// module.exports.start = gulp.series(fonts)
// module.exports.start = gulp.series(imgMin)

function setMode(isProduction = false) {
    return cb => {
        process.env.NODE_ENV = isProduction ? 'production' : 'development'
        cb()
    }
}

const dev = gulp.parallel(pug2html, styles, scripts, fonts, imgMin)

const build = gulp.series(clean, dev)

module.exports.start = gulp.series(setMode(), build, watch)
module.exports.build = gulp.series(setMode(true), build)