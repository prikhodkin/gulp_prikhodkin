"use strict"

import paths from "../../config";
import gulp from "gulp";

gulp.task('watch', ()=> {
  gulp.watch(paths.sass.watch,gulp.series('sass'));
  gulp.watch(paths.html.watch,gulp.series('html'));
  gulp.watch(paths.scripts.watch,gulp.series('scripts'));
  gulp.watch(paths.images.watch,gulp.series('images'));
  gulp.watch(paths.fonts.watch,gulp.series('fonts'));
  gulp.watch(paths.sprite.watch,gulp.series('sprite'));
});
