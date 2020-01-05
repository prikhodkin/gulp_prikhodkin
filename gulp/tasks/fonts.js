"use strict"

import { paths } from "../../gulpfile.babel";
import gulp from "gulp";
import browserSync from "browser-sync";

gulp.task("fonts", ()=> {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest))
        .pipe(browserSync.reload({
          stream: true
        }))
});