const gulp = require("gulp");
const paths = require("../config");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const include = require("gulp-file-include");
const webpHtml = require("gulp-webp-html");
const browserSync = require("browser-sync");
const yargs = require("yargs");
const gulpif = require("gulp-if");

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
    .pipe(webpHtml())
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
};
