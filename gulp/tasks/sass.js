module.exports = function() {
  $.gulp.task('sass', ()=> {
    return $.gulp.src('src/scss/main.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass({
        includeCss: true,
        includePaths: require('node-normalize-scss').includePaths
      }))
      .pipe($.gp.autoprefixer({
        cascade: false
      }))
      .on("error", $.gp.notify.onError({
        title: "Style"
      }))
      .pipe($.gp.replace('../../','../'))
      .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('docs/css/'))
      .pipe($.bs.reload({
        stream: true
      }))
  });
};