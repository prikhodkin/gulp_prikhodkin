module.exports = function() {
  $.gulp.task('scripts:lib', ()=> {
    return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
    'node_modules/slick-carousel/slick/slick.min.js'])
    .pipe($.gp.concat('libs.min.js'))
    .pipe($.gulp.dest('./docs/js/'))
    .pipe($.bs.reload({
      stream: true
    }))
  });

  $.gulp.task('scripts', ()=> {
    return $.gulp.src('src/js/**/*.js')
    .pipe($.gp.sourcemaps.init())
    .pipe($.gp.babel({presets: ["@babel/preset-env"]}))
    .pipe($.gp.uglify())
    .pipe($.gp.rename({suffix: ".min"}))
    .pipe($.gp.sourcemaps.write("./maps/"))
    .pipe($.gulp.dest('./docs/js/'))
    .pipe($.bs.reload({
      stream: true
    }))
  });
};