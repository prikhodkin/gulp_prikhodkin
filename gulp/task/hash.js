const gulp = require("gulp");
const rev = require("gulp-rev");

module.exports = function hash() {
  return gulp.src(['dist/css/*.css', 'dist/js/*.js'], {base: 'src'})
    .pipe(gulp.dest('./dist/'))
    .pipe(rev())
    .pipe(gulp.dest('./dist/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist/'))
}
