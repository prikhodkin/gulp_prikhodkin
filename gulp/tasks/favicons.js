"use strict"

import paths from "../../config";
import gulp from "gulp";
import plumber from "gulp-plumber";
import favicons from "gulp-favicons";

gulp.task("favicons", ()=> {
    return gulp.src(paths.favicons.src)
        .pipe(plumber())
        .pipe(favicons({
            icons: {
                appleIcon: true,
                favicons: true,
                online: false,
                appleStartup: false,
                android: false,
                firefox: false,
                yandex: false,
                windows: false,
                coast: false
            }
        }))
        .pipe(gulp.dest(paths.favicons.dest))
});
