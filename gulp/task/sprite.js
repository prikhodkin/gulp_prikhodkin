const gulp = require("gulp");
const paths = require("../config");
const plumber = require("gulp-plumber");
const replace = require("gulp-replace");
const svg = require("gulp-svg-sprite");
const cheerio = require("gulp-cheerio");
const browserSync = require("browser-sync");

module.exports = function sprite() {
  return gulp.src(paths.sprite.src)
    .pipe(plumber())
    .pipe(replace("&gt;", ">"))
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[style]').removeAttr('style');
        $('[stroke]').removeAttr('stroke');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(svg({
      shape: {
        dest: "intermediate-svg"
      },
      mode: {
        stack: {
          sprite: "../sprite.svg"
        }
      }
    }))
    .pipe(gulp.dest(paths.sprite.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
}
