"use strict"

import { paths } from "../../gulpfile.babel";
import gulp from "gulp";
import g_clean from "gulp-clean";


gulp.task("clean", ()=> {
    return gulp.src(paths.clean.src, {read: false})
        .pipe(g_clean())
});

