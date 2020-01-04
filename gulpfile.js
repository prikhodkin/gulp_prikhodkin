global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: browserSync = require('browser-sync').create(),
  svgSprite: require('gulp-svg-sprites'),

  path: {
    tasks: require('./gulp/config')
  }
};

$.path.tasks.forEach(function(taskPath){
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series('clean','sprite',
  $.gulp.parallel('sass','html','scripts:lib','scripts','images','favicons','fonts'),
  $.gulp.parallel('watch','serve')
));