const gulp = require("gulp");
const fs = require("fs");
const plumber = require("gulp-plumber");
const gfavicon = require("gulp-favicons");

let paths;

try {
  fs.accessSync('gulp/user-config.js');
  paths = require("../user-config");
}

catch (err) {
  fs.accessSync('gulp/config.js');
  paths = require("../config");
}

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
