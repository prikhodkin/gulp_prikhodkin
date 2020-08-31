const gulp = require("gulp");
const paths = require("../config");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync");

module.exports = function vendor() {
  return gulp.src(paths.vendor.src)
    .pipe(plumber())
    .pipe(gulp.dest(paths.vendor.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
}
