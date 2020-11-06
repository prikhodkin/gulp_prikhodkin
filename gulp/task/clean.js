const fs = require("fs");
const gulp = require("gulp");
const del = require("gulp-clean");
let paths;

try {
  fs.accessSync('gulp/user-config.js');
  paths = require("../user-config");
}

catch (err) {
  fs.accessSync('gulp/config.js');
  paths = require("../config");
}

module.exports = function clean() {
  return gulp.src(paths.clean.src, {read: false})
    .pipe(del())
}
