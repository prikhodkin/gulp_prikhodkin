"use strict"

import { paths } from "../../gulpfile.babel";
import gulp from "gulp";
import replace from "gulp-replace";
import rename from "gulp-rename";
import plumber from "gulp-plumber";
import include from "gulp-file-include";
import browserSync from "browser-sync";

gulp.task('html', ()=> {
  return gulp.src(paths.html.src)
  .pipe(plumber())
  .pipe(include({
    prefix: '@@',
    basepath: '@file'
  }))
  .pipe(rename({dirname: ''}))
  .pipe(replace('../',''))
  .pipe(gulp.dest(paths.html.dest))
  .pipe(browserSync.reload({
    stream: true
  }))
});


