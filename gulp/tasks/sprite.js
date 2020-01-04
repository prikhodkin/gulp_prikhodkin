module.exports = function() {
    $.gulp.task("sprite", function() {
        return $.gulp.src("./src/img/icons/svg/*.svg")
            .pipe($.gp.replace("&gt;", ">"))
            .pipe($.gp.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[style]').removeAttr('style');
                    $('[stroke]').removeAttr('stroke');
                },
                parserOptions: { xmlMode: true }
            }))
            .pipe($.svgSprite({
				preview: false,
                cssFile: "../../../src/scss/blocks/_sprite.scss",
				svg: {
					sprite: "../../../docs/img/sprites/sprite.svg"
				}
            }))
            .pipe($.gulp.dest("./docs/img/sprites/"))
            .pipe($.bs.reload({
                stream: true
              }))
    });
};
