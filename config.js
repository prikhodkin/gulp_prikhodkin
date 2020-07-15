// Пути для тасков
import libs from "./libs";

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
    src: "../www/local/templates/mobile_app/assets/",
    clean: "./dist/**"
  }
};

export default paths;
