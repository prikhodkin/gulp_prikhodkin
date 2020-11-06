const gulp = require("gulp");
const fs = require("fs");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const include = require("gulp-file-include");
const browserSync = require("browser-sync");
const yargs = require("yargs");
const gulpif = require("gulp-if");
let paths;

try {
  fs.accessSync('gulp/user-config.js');
  paths = require("../user-config");
}

catch (err) {
  fs.accessSync('gulp/config.js');
  paths = require("../config");
}

const argv = yargs.argv;
const production = !!argv.production;

module.exports = function html() {
  return gulp.src(paths.html.src)
    .pipe(plumber())
    .pipe(include({
      prefix: "@@",
      basepath: "@file"
    }))
    .pipe(rename({dirname: ''}))
    .pipe(replace('../',''))
    .pipe(gulpif(production, replace('.css','.min.css')))
    .pipe(gulpif(production, replace(".js", ".min.js")))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
};
