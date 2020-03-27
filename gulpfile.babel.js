"use strict"

import gulp from "gulp";


const requireDir = require("require-dir"),
    paths = {
        html: {
            src: "src/view/**/*.html",
            dest: "./docs/",
            watch: "src/**/*.html"
        },
        clean: {
          src: "./docs/*"
        },
        favicons: {
          src: "./src/img/favicons/*.{jpg,jpeg,png,gif}",
          dest: "./docs/img/favicons/"
        },
        fonts: {
          src: "./src/fonts/**/*.{woff,woff2}",
          dest: "./docs/fonts/",
          watch: "src/fonts/**/*"
        },
        images: {
          src: ["./src/img/**/*.{jpg,jpeg,png,gif,svg}", "!./src/img/svg/icons/*", "!./src/img/favicons/*.{jpg,jpeg,png,gif,svg}"],
          dest: "./docs/img/",
          watch: "src/img/**/*"
        },
        sass: {
          src: "src/scss/main.scss",
          dest: "docs/css/",
          watch: ['src/scss/**/*.scss','src/blocks/**/*.scss']
        },
        scripts: {
          src: "src/js/general.js",
          dest: "./docs/js/",
          watch: ['src/js/**/*.js','src/blocks/**/*.js']
        },
        scriptsLib: {
          src: [
            './node_modules/stimulus/dist/stimulus.umd.js',
            './node_modules/vh-check/dist/vh-check.js',
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/wow.js/dist/wow.js',
            './node_modules/slick-carousel/slick/slick.min.js'],
          dest: "./docs/js/"
        },
        sprite: {
          src: "./src/img/icons/svg/*.svg",
          dest: "./docs/img/sprites/",
          style: "../../../src/scss/blocks/_sprite.scss",
          svg: "../../../docs/img/sprites/sprite.svg",
          watch: "src/img/icons/svg/*"
        },
        webp: {
          src: ["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/svg/icons/*", "!./src/img/favicons/*.{jpg,jpeg,png,gif,svg}"],
          dest: "./docs/img/",
          watch: "src/img/**/*" 
        }

    };

requireDir("./gulp/tasks/");

export { paths };

gulp.task('dev',
  gulp.series('clean','sprite',
  gulp.parallel('sass','html','scripts:lib','scripts','images','favicons','fonts', 'webp'),
  gulp.parallel('watch','serve')
));

gulp.task('build',
  gulp.series('clean','sprite', 
    gulp.parallel('sass:min','html','scripts:min','scripts-lib:min','images:min','favicons','fonts', 'webp'),
    gulp.series('hash')
  ));


