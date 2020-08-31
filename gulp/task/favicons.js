const gulp = require("gulp");
const paths = require("../config");
const plumber = require("gulp-plumber");
const gfavicon = require("gulp-favicons");

module.exports = function favicon() {
  return gulp.src(paths.favicon.src)
    .pipe(plumber())
    .pipe(gfavicon({
      icons: {
        appleIcon: true,
        favicons: true,
        online: false,
        appleStartup: false,
        android: false,
        firefox: false,
        yandex: false,
        windows: false,
        coast: false
      }
    }))
    .pipe(gulp.dest(paths.favicon.dest))
}
