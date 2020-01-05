module.exports = function() {
  $.gulp.task('html', ()=> {
    return $.gulp.src('src/view/**/*.html')
    .pipe($.gp.rigger())
    .pipe($.gp.replace('../',''))
    .pipe($.gulp.dest('./docs/'))
    .pipe($.bs.reload({
      stream: true
    }))
  });
};