const gulp = require("gulp");
const fs = require("fs");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync");
const yargs = require("yargs");
const gulpif = require("gulp-if");
const webpack = require("webpack");
const webpackStream = require("webpack-stream");
const webpackConfig = require("../../webpack.config");
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

const webpackDevelopment = () => {
  return webpackStream({...webpackConfig,   mode: "development", devtool: "source-map"}, webpack)
}

const webpackProduction = () => {
  return webpackStream({...webpackConfig,   mode: "production"}, webpack)
}

module.exports = function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(plumber())
    .pipe(gulpif(!production, webpackDevelopment(), webpackProduction() ))
    .pipe(rename({dirname: ''}))
    .pipe(gulpif(production, uglify()))
    .pipe(gulpif(production, rename({suffix: ".min"})))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
}
