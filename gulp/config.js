// Пути для тасков

module.exports = {
  clean: {
    src: "./dist/*"
  },
  favicon: {
    src: "./src/img/favicons/*.{jpg,jpeg,png,gif}",
    dest: "./dist/img/favicons/"
  },
  html: {
    src: "src/pages/**/*.html",
    dest: "./dist/",
    watch: "src/**/*.html"
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
  style: {
    src: ["src/scss/main.scss", "src/pages/**/*.scss"],
    dest: "dist/css/",
    watch: ["src/scss/**/*.scss","src/blocks/**/*.scss", "src/pages/**/*.scss"]
  },
  scripts: {
    src: ["src/js/**/*.js","src/pages/**/*.js"],
    dest: "./dist/js/",
    watch: ["src/js/**/*.js", "src/blocks/**/*.js", "src/pages/**/*.js"]
  },
  sprite: {
    src: "./src/img/icons/svg/*.svg",
    dest: "./dist/img/sprites/",
    watch: "src/img/icons/svg/*"
  },
  webp: {
    src: ["./src/img/**/*.{jpg,jpeg,png,gif}", "!./src/img/svg/icons/*", "!./src/img/favicons/*.{jpg,jpeg,png,gif,svg}"],
    dest: "./dist/img/"
  },
  deploy: {
    dest: "../www/",
    src: "./dist/**"
  },
  vendor: {
    src: "./src/vendor/**",
    dest: "dist/vendor/"
  }
}
