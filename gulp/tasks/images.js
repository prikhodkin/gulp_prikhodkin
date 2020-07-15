"use strict"

import paths from "../../config";
import gulp from "gulp";
import newer from "gulp-newer";
import plumber from "gulp-plumber";
import imagemin from "gulp-imagemin";
import browserSync from "browser-sync";

gulp.task("images", ()=> {
    return gulp.src(paths.images.src)
        .pipe(plumber())
        .pipe(newer(paths.images.dest))
        .pipe(gulp.dest(paths.images.dest))
        .pipe(browserSync.reload({
            stream: true
          }))
});

gulp.task("images:min", () => {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest))
});
