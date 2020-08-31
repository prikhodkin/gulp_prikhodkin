const gulp = require("gulp");
const paths = require("../config");

module.exports = function deploy() {
  return gulp.src(paths.deploy.src)
    .pipe(gulp.dest(paths.deploy.dest))
}
