module.exports = function() {
  $.gulp.task("favicons", ()=> {
      return $.gulp.src("./src/img/favicons/*.{jpg,jpeg,png,gif}")
          .pipe($.gp.favicons({
              icons: {
                  appleIcon: true,
                  favicons: true,
                  online: false,
                  appleStartup: false,
                  android: false,
                  firefox: false,
                  yandex: false,
                  windows: false,
                  coast: false
              }
          }))
          .pipe($.gulp.dest("./docs/img/favicons/"))
  });
};
