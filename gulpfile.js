const gulp = require("gulp");
const ghpages = require("gh-pages");
const html = require("./gulp/task/html");
const clean = require("./gulp/task/clean");
const favicon = require("./gulp/task/favicons");
const fonts = require("./gulp/task/fonts");
const images = require("./gulp/task/images");
const style = require("./gulp/task/style");
const scripts = require("./gulp/task/scripts")
const serve = require("./gulp/task/serve");
const sprite = require("./gulp/task/sprite");
const watch = require("./gulp/task/watch");
const hash = require("./gulp/task/hash");
const webp = require("./gulp/task/wepb");
const dep = require("./gulp/task/deploy");
const vendor = require("./gulp/task/vendor");

//Режим разработки
module.exports.dev = gulp.series(
  clean,
  gulp.parallel(
    html,
    favicon,
    fonts,
    images,
    style,
    scripts,
    sprite,
    webp,
    vendor
  ),
  gulp.parallel(
    serve,
    watch
  )
);

// Режим продакшн
module.exports.build = gulp.series(
  clean,
  gulp.parallel(
    html,
    favicon,
    fonts,
    images,
    style,
    scripts,
    sprite,
    webp,
    vendor
  ),
  hash
);


// Билд сборки в нужную папку
module.exports.deploy = gulp.series(
  dep
);

// Публикация на GitHub Pages
module.exports.ghp = (cb) => {
  ghpages.publish('./dist', cb);
}
