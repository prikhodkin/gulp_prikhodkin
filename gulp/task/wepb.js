const gulp = require("gulp");
const fs = require("fs");
const imageminWebp = require("imagemin-webp");
const gwebp = require("gulp-webp");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync");
let paths;

try {
  fs.accessSync('gulp/user-config.js');
  paths = require("../user-config");
}

catch (err) {
  fs.accessSync('gulp/config.js');
  paths = require("../config");
}

module.exports = function webp() {
  return gulp.src(paths.webp.src)
    .pipe(plumber())
    .pipe(gwebp([
      imageminWebp({
        lossless: true,
        quality: 80,
        alphaQuality: 80
      })
    ]))
    .pipe(gulp.dest('./src/img/'))
    .pipe(gulp.dest(paths.webp.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
}
