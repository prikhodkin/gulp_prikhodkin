const gulp = require("gulp");
const fs = require("fs");
const plumber = require("gulp-plumber");
const newer = require("gulp-newer")
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync");
const imageminGiflossy = require("imagemin-giflossy");
const imageminPngquant = require("imagemin-pngquant");
const imageminZopfli = require("imagemin-zopfli");
const imageminMozjpeg = require("imagemin-mozjpeg");
const yargs = require("yargs");
const gulpif = require("gulp-if");
let paths;

try {
  fs.accessSync('gulp/user-config.js');
  paths = require("../user-config");
}

catch (err) {
  fs.accessSync('gulp/config.js');
  paths = require("../config");
}

const argv = yargs.argv;
const production = !!argv.production;

module.exports = function images() {
  return gulp.src(paths.images.src)
    .pipe(plumber())
    .pipe(newer(paths.images.dest))
    .pipe(gulpif(production, imagemin([
      imageminGiflossy({
        optimizationLevel: 3,
        optimize: 3,
        lossy: 2
      }),
      imageminPngquant({
        speed: 5,
        quality: [0.6, 0.8]
      }),
      imageminZopfli({
        more: true
      }),
      imageminMozjpeg({
        progressive: true,
        quality: 90
      }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: false },
          { removeUnusedNS: false },
          { removeUselessStrokeAndFill: false },
          { cleanupIDs: false },
          { removeComments: true },
          { removeEmptyAttrs: true },
          { removeEmptyText: true },
          { collapseGroups: true }
        ]
      })
    ])))
    .pipe(gulp.dest(paths.images.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
}
