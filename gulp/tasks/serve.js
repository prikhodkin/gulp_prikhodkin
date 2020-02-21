"use strict"
import gulp from "gulp";
import browserSync from "browser-sync";

gulp.task('serve', ()=> {
  browserSync.init({
    server: {
      baseDir: './docs',
      tunnel: true,
      port: 9000
    }
  });
});
