import gulp from "gulp";
import rev from "gulp-rev";

gulp.task('hash', () =>
  gulp.src(['dist/css/*.css', 'dist/js/*.js'], {base: 'src'})
    .pipe(gulp.dest('./dist/'))  // copy original assets to build dir
    .pipe(rev())
    .pipe(gulp.dest('./dist/'))  // write rev'd assets to build dir
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist/'))  // write manifest to build dir
);
