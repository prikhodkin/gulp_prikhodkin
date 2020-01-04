module.exports = function() {
  $.gulp.task("clean", ()=> {
      return $.gulp.src("./docs/*", {read: false})
          .pipe($.gp.clean())
  });
};
