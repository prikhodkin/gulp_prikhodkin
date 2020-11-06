const gulp = require("gulp");
const fs = require("fs");
let paths;

try {
  fs.accessSync('gulp/user-config.js');
  paths = require("../user-config");
}

catch (err) {
  fs.accessSync('gulp/config.js');
  paths = require("../config");
}

module.exports = function deploy() {
  return gulp.src(paths.deploy.src)
    .pipe(gulp.dest(paths.deploy.dest))
}
