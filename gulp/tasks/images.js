module.exports = function() {
    $.gulp.task("images", ()=> {
        return $.gulp.src(["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/svg/icons/*", "!./src/img/favicons/*.{jpg,jpeg,png,gif,svg}"])
            .pipe($.gp.newer("./docs/img/"))
            .pipe($.gp.imagemin())
            .pipe($.gulp.dest("./docs/img/"))
            .pipe($.bs.reload({
                stream: true
              }))
    });
};
