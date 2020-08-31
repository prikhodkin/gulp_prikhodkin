const gulp = require("gulp");
const browserSync = require("browser-sync");

module.exports = function serve() {
  browserSync.init({
    server: {
      baseDir: './dist',
      tunnel: true,
      port: 9000
    }
  });
}
