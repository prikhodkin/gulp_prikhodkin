"use strict"

import paths from "../../config";
import gulp from "gulp";
import sourcemaps  from "gulp-sourcemaps";
import plumber from "gulp-plumber";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";
import csso from "gulp-csso";
import rename from "gulp-rename";
import replace from "gulp-replace";
import browserSync from "browser-sync";

gulp.task('sass', ()=> {
  return gulp.src(paths.sass.src)
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({
      includeCss: true,
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(replace('../../','../'))

    .pipe(cleanCss())
    .pipe(rename({dirname: ''}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('sass:min', () => {
  return gulp.src(paths.sass.src)
    .pipe(sass({
      includeCss: true,
      includePaths: require('node-normalize-scss').includePaths
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(replace('../../','../'))
    .pipe(csso())
    .pipe(cleanCss({
      level:
        {
          1:
            {
              specialComments: 0
            }
        }
    }))
    .pipe(rename({dirname: ''}))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('dist/css/'))
})
