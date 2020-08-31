const gulp = require("gulp");
const paths = require("../config");
const del = require("gulp-clean");

module.exports = function clean() {
  return gulp.src(paths.clean.src, {read: false})
    .pipe(del())
}
