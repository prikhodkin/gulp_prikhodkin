"use strict"

import gulp from "gulp";
import clean from 'gulp-clean'
import paths from "../../config";

gulp.task("bitrix:cc", () => {
  return gulp.src(paths.bitrix.src)
    .pipe(clean({force: true}))
    .pipe(gulp.src(paths.clean.src))
    .pipe(gulp.dest(paths.bitrix.src))
});
