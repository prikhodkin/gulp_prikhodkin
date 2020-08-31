const gulp = require("gulp");
const paths = require("../config");
const imageminWebp = require("imagemin-webp");
const gwebp = require("gulp-webp");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync");

module.exports = function webp() {
  return gulp.src(paths.webp.src)
    .pipe(plumber())
    .pipe(gwebp([
      imageminWebp({
        lossless: true,
        quality: 90,
        alphaQuality: 90
      })
    ]))
    .pipe(gulp.dest('./src/img/'))
    .pipe(gulp.dest(paths.webp.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
}
