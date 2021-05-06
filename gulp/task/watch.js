const gulp = require("gulp");
const fs = require("fs");
const html = require("./html");
const fonts = require("./fonts");
const images = require("./images");
const style = require("./style");
const scripts = require("./scripts")
const sprite = require("./sprite");
const vendor = require("./vendor");
const webp = require("./wepb");
let paths;

try {
  fs.accessSync('gulp/user-config.js');
  paths = require("../user-config");
}

catch (err) {
  fs.accessSync('gulp/config.js');
  paths = require("../config");
}

module.exports = function watch() {
  gulp.watch(paths.style.watch,gulp.series(style));
  gulp.watch(paths.html.watch,gulp.series(html));
  gulp.watch(paths.scripts.watch,gulp.series(scripts));
  gulp.watch(paths.images.watch,gulp.series(images));
  gulp.watch(paths.webp.src,gulp.series(webp));
  gulp.watch(paths.fonts.watch,gulp.series(fonts));
  gulp.watch(paths.vendor.src,gulp.series(vendor));
  gulp.watch(paths.sprite.watch,gulp.series(sprite));
}
