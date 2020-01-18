"use strict"

import { paths } from "../../gulpfile.babel";
import gulp from "gulp";
import rigger from "gulp-rigger";
import replace from "gulp-replace";
import plumber from "gulp-plumber";
import browserSync from "browser-sync";

gulp.task('html', ()=> {
  return gulp.src(paths.html.src)
  .pipe(plumber())
  .pipe(rigger())
  .pipe(replace('../',''))
  .pipe(gulp.dest(paths.html.dest))
  .pipe(browserSync.reload({
    stream: true
  }))
});