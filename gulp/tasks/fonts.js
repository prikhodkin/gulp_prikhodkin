module.exports = function () {
  $.gulp.task("fonts", ()=> {
      return $.gulp.src("./src/fonts/**/*.{woff,woff2}")
          .pipe($.gulp.dest("./docs/fonts/"))
          .pipe($.bs.reload({
            stream: true
          }))
  });
};

