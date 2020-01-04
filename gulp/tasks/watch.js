module.exports = function() {
  $.gulp.task('watch', ()=> {
    $.gulp.watch('src/scss/**/*.scss',$.gulp.series('sass'));
    $.gulp.watch('src/**/*.html',$.gulp.series('html'));
    $.gulp.watch('src/js/**/*.html',$.gulp.series('scripts'));
    $.gulp.watch('src/img/**/*',$.gulp.series('images'));
    $.gulp.watch('src/fonts/**/*',$.gulp.series('fonts'));
    $.gulp.watch('src/img/icons/svg/*',$.gulp.series('sprite'));
  });
};