"use strict"

import gulp from "gulp";
import ghPages from "gh-pages";
import requireDir from "require-dir";
import path from "path";

// Подключение всех тасков
requireDir("./gulp/tasks/");


// Режим разработки
gulp.task('dev',
  gulp.series('clean',
    gulp.parallel('sprite','sass','html','scripts:lib','scripts','images','favicons','fonts', 'webp'),
    gulp.parallel('watch','serve')
));


// Режим продакшн
gulp.task('build',
  gulp.series('clean',
    gulp.parallel('sprite','sass:min','html:min','scripts:min','scripts-lib:min','images:min','favicons','fonts', 'webp'),
    'hash'
));


// Копирование файлов в директорию
gulp.task('bitrix',
  gulp.series('build', 'bitrix:cc')
);

// Деплой на GH-Pages
export const deploy = (cb) => {
  ghPages.publish(path.join(process.cwd(), './dist'), cb);
}
