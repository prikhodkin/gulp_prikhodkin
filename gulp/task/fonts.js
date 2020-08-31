const gulp = require("gulp");
const paths = require("../config");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync");

module.exports = function fonts() {
  return gulp.src(paths.fonts.src)
    .pipe(plumber())
    .pipe(gulp.dest(paths.fonts.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
}
