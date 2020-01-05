"use strict"

import { paths } from "../../gulpfile.babel";
import gulp from "gulp";
import newer from "gulp-newer";
import imagemin from "gulp-imagemin";
import browserSync from "browser-sync";

gulp.task("images", ()=> {
    return gulp.src(paths.images.src)
        .pipe(newer(paths.images.dest))
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest))
        .pipe(browserSync.reload({
            stream: true
          }))
});