const gulp = require("gulp");
const fs = require("fs");
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

module.exports = function vendor() {
  return gulp.src(paths.vendor.src)
    .pipe(plumber())
    .pipe(gulp.dest(paths.vendor.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
}
