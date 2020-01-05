"use strict"

import { paths } from "../../gulpfile.babel";
import gulp from "gulp";
import cheerio from "gulp-cheerio"
import svgSprite from "gulp-svg-sprites"
import replace from "gulp-replace";
import browserSync from "browser-sync";

gulp.task("sprite", function() {
    return gulp.src(paths.sprite.src)
        .pipe(replace("&gt;", ">"))
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[style]').removeAttr('style');
                $('[stroke]').removeAttr('stroke');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(svgSprite({
    preview: false,
            cssFile: paths.sprite.style,
    svg: {
      sprite: paths.sprite.svg
    }
        }))
        .pipe(gulp.dest(paths.sprite.dest))
        .pipe(browserSync.reload({
            stream: true
          }))
});

