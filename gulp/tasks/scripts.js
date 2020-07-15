"use strict"

import paths from "../../config";
import gulp from "gulp";
import concat from "gulp-concat"
import sourcemaps  from "gulp-sourcemaps";
import rigger from "gulp-rigger";
import babel from "gulp-babel";
import uglify from "gulp-uglify";
import plumber from "gulp-plumber";
import rename from "gulp-rename";
import browserSync from "browser-sync";


gulp.task('scripts:lib', ()=> {
  return gulp.src(paths.scriptsLib.src)
    .pipe(plumber())
    .pipe(concat('libs.js'))
    .pipe(gulp.dest(paths.scriptsLib.dest))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('scripts', ()=> {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(rigger())
    .pipe(babel({presets: ["@babel/preset-env"]}))
    .pipe(sourcemaps.write("./maps/"))
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('scripts-lib:min', ()=> {
  return gulp.src(paths.scriptsLib.src)
    .pipe(plumber())
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('./dist/js/'))

});

gulp.task('scripts:min', () => {
  return gulp.src(paths.scripts.src)
    .pipe(rigger())
    .pipe(babel({presets: ["@babel/preset-env"]}))
    .pipe(uglify())
    .pipe(rename({dirname: ''}))
    .pipe(rename({suffix: ".min"}))
    .pipe(gulp.dest('./dist/js/'))
});
