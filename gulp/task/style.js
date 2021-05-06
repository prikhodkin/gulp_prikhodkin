const gulp = require("gulp");
const fs = require("fs");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const mincss = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
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

module.exports = function style() {
  return gulp.src(paths.style.src)
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(plumber())
    .pipe(sass({
      includeCss: true
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(replace('../../','../'))
    .pipe(gulpif(production, mincss({
      compatibility: "ie8", level: {
        1: {
          specialComments: 0,
          removeEmpty: true,
          removeWhitespace: true
        },
        2: {
          mergeMedia: true,
          removeEmpty: true,
          removeDuplicateFontRules: true,
          removeDuplicateMediaBlocks: true,
          removeDuplicateRules: true,
          removeUnusedAtRules: false
        }
      }
    })))
    .pipe(rename({dirname: ''}))
    .pipe(gulpif(!production, sourcemaps.write("./maps/")))
    .pipe(gulpif(production, rename({suffix: ".min"})))
    .pipe(gulp.dest(paths.style.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
}
