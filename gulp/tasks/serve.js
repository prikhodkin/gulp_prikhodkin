"use strict"
import gulp from "gulp";
import browserSync from "browser-sync";

gulp.task('serve', ()=> {
  browserSync.init({
    server: {
      baseDir: './dist',
      tunnel: true,
      port: 9000
    }
  });
});
