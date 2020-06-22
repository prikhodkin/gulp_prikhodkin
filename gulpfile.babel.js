"use strict"

import gulp from "gulp";
import ghPages from "gh-pages";
import requireDir from "require-dir";
import path from "path";
import libs from "./libs";


// Пути для тасков
const paths = {
    html: {
      src: "src/pages/**/*.html",
      dest: "./dist/",
      watch: "src/**/*.html"
    },
    clean: {
      src: "./dist/*"
    },
    favicons: {
      src: "./src/img/favicons/*.{jpg,jpeg,png,gif}",
      dest: "./dist/img/favicons/"
    },
    fonts: {
      src: "./src/fonts/**/*.{woff,woff2}",
      dest: "./dist/fonts/",
      watch: "src/fonts/**/*"
    },
    images: {
      src: ["./src/img/**/*.{jpg,jpeg,png,gif,svg,mp4}", "!./src/img/svg/icons/*", "!./src/img/favicons/*.{jpg,jpeg,png,gif,svg}"],
      dest: "./dist/img/",
      watch: "src/img/**/*"
    },
    sass: {
      src: ["src/scss/main.scss", "src/pages/**/*.scss"],
      dest: "dist/css/",
      watch: ["src/scss/**/*.scss","src/blocks/**/*.scss", "src/pages/**/*.scss"]
    },
    scripts: {
      src: ["src/js/**/*.js","src/pages/**/*.js"],
      dest: "./dist/js/",
      watch: ["src/js/**/*.js", "src/blocks/**/*.js", "src/pages/**/*.js"]
    },
    scriptsLib: {
      src: libs,
      dest: "./dist/js/"
    },
    sprite: {
      src: "./src/img/icons/svg/*.svg",
      dest: "./dist/img/sprites/",
      style: "../../../src/scss/blocks/_sprite.scss",
      svg: "../../../dist/img/sprites/sprite.svg",
      watch: "src/img/icons/svg/*"
    },
    webp: {
      src: ["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/svg/icons/*", "!./src/img/favicons/*.{jpg,jpeg,png,gif,svg}"],
      dest: "./dist/img/",
      watch: "src/img/**/*"
    },
    bitrix: {
      src: "../www/local/templates/mobile_app/assets/"
    }
  };

requireDir("./gulp/tasks/");

export { paths };

gulp.task('dev',
  gulp.series('clean',
    gulp.parallel('sprite','sass','html','scripts:lib','scripts','images','favicons','fonts', 'webp'),
    gulp.parallel('watch','serve')
  ));

gulp.task('build',
  gulp.series('clean',
    gulp.parallel('sprite','sass:min','html:min','scripts:min','scripts-lib:min','images:min','favicons','fonts', 'webp'),
    'hash'
  ));

gulp.task('bitrix',
    gulp.series('build', 'bitrix:cc')
  );

// Деплой на GH-Pages
export const deploy = (cb) => {
  ghPages.publish(path.join(process.cwd(), './dist'), cb);
}
