"use strict"

import paths from "../../config";
import gulp from "gulp";
import clean from "gulp-clean";

gulp.task("clean", ()=> {
    return gulp.src(paths.clean.src, {read: false})
        .pipe(clean())
});



