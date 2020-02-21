import gulp from "gulp";
import rev from "gulp-rev";

gulp.task('hash', () =>
  gulp.src(['src/css/*.css', 'src/js/general.min.js', 'src/js/libs.min.js'], {base: 'src'})
    .pipe(gulp.dest('./src/'))  // copy original assets to build dir
    .pipe(rev())
    .pipe(gulp.dest('./docs/'))  // write rev'd assets to build dir
    .pipe(rev.manifest())
    .pipe(gulp.dest('./docs/'))  // write manifest to build dir
);