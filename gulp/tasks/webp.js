"use strict";

import paths from "../../config";
import gulp from "gulp";
import imageminWebp from "imagemin-webp";
import webp from "gulp-webp";
import plumber from "gulp-plumber";
import browsersync from "browser-sync";

gulp.task("webp", () => {
    return gulp.src(paths.webp.src)
        .pipe(plumber())
        .pipe(webp([
          imageminWebp({
            lossless: true,
            quality: 90,
            alphaQuality: 90
          })
        ]))
        .pipe(gulp.dest('./src/img/'))
        .pipe(gulp.dest(paths.webp.dest))
        .pipe(browsersync.reload({
          stream: true
        }))
});
