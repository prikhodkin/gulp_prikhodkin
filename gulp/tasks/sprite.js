"use strict"

import paths from "../../config";
import gulp from "gulp";
import svg from "gulp-svg-sprite";
import cheerio from "gulp-cheerio";
import plumber from "gulp-plumber";
import replace from "gulp-replace";
import browserSync from "browser-sync";

gulp.task("sprite", function() {
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
});

