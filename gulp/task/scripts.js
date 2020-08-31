const gulp = require("gulp");
const paths = require("../config");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync");
const yargs = require("yargs");
const gulpif = require("gulp-if");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("../../webpack.config");

const argv = yargs.argv;
const production = !!argv.production;

module.exports = function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(plumber())
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(rename({dirname: ''}))
    .pipe(gulpif(production, uglify()))
    .pipe(gulpif(production, rename({suffix: ".min"})))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
}
