"use strict"

import paths from "../../config";
import gulp from "gulp";
import plumber from "gulp-plumber";
import browserSync from "browser-sync";

gulp.task("fonts", ()=> {
    return gulp.src(paths.fonts.src)
        .pipe(plumber())
        .pipe(gulp.dest(paths.fonts.dest))
        .pipe(browserSync.reload({
          stream: true
        }))
});
