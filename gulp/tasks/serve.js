module.exports = function() {
  $.gulp.task('serve', ()=> {
    $.bs.init({
      server: {
        baseDir: './docs'
      }
    });
  });
};