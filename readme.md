# Сборка Gulp для верстки
![GitHub release](https://img.shields.io/badge/release-v.5.0-green)
[![GitHub issues](https://img.shields.io/github/issues/prikhodkin/gulp_prikhodkin)](https://github.com/prikhodkin/gulp_prikhodkin/issues)
[![GitHub forks](https://img.shields.io/github/forks/prikhodkin/gulp_prikhodkin)](https://github.com/prikhodkin/gulp_prikhodkin/network)
[![Twitter](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fbiz_prikhodkin)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fprikhodkin%2Fgulp_prikhodkin)

##Возможности сборки
+ Препроцессор SCSS
+ Автоматическая генерация WebP
+ Автоматическая генерация SVG Sprite
+ WebPack для работы с JS modules
+ Минификация билда для продакшн версии
+ Деплой проекта на GitHub Pages и GitLab Pages
+ Автоматическая подмена путей в продакшн версии
+ StyleLint и ES Lint
+ Создание БЭМ блоков командой в консоли

## Содержание
 + [Быстрый старт](#setup)
 + [Структура проекта](#file)
 + [Команды запуска](#command)
 + [Библиотеки](#libs)
 + [Заметки](#help)
    + [Создание БЭМ блока](#bem)
    + [Использование svg спрайта](#svg)
    + [Подключение файлов](#include)
 + [Ошибки](#error)

### <a name="setup"></a> Быстрый старт

+ Установить [Node.JS](https://nodejs.org/en/)
+ [Склонировать репозиторий](https://github.com/prikhodkin/gulp_prikhodkin) ```git@github.com:prikhodkin/gulp_prikhodkin.git```
+ Перейти в папку со сборкой
+ Установить npm зависимости ```npm i ```
+ Запустить проект ```npm run dev```
+ При необходимости изменить конфиг, создать файл user-config.js в директории `gulp`
### <a name="file"></a> Структура проекта
```
gulp_prikhodkin                         | Корень проекта
├── gulp                                | Файлы для настроек галпа 
│   ├── task                            | Таски для галпа
│   └── user-config.js                | Конфигурация проекта (переименовать в config.js)
├── src                                 | Исходные файлы
│   ├── blocks                          | БЭМ блоки
│   │   ├── block                       | БЭМ Блок
│   │   │   ├── block.html              | Разметка блока
│   │   │   └── block.scss              | Стили блока
│   │   └── general-blocks.scss         | Общий файл стилей, в который импортируются все стили общих блоков 
│   ├── fonts                           | Шрифты
│   ├── img                             | Изображения
│   │   ├── icons                       | Иконки   
│   │   │   └── svg                     | SVG файлы для спрайта           
│   │   └── favicons                    | Фавиконки
│   ├── js                              | JS файлы
│   ├── scss                            | Файлы стилей
│   │   ├── helpers                     | Помощники
│   │   │   ├── _global.scss            | Глобальные стили сайта
│   │   │   ├── _fonts.scss             | Подключение шрифтов
│   │   │   ├── _mixins.scss            | Примеси
│   │   │   ├── _normalize.scss         | Сброс стандартных стилей
│   │   │   ├── _libs.scss              | Стили от библиотек
│   │   │   └── _variables.scss         | Переменные
│   │   └── main.scss                   | Основной файл стилей, импортирует все остальные стиливые файлы
│   └── pages                           | Страницы проекта
│       └── index                       | Директория страницы
│           ├── index.html              | Разметка страницы
│           ├── index.scss              | Файл стилей страницы, в который импортируются нужные стили из блоков
│           └── index.js                | Js файл страницы, в который импортируются нужные js файлы из блоков
├── .bemrc.js                           | Конфигурация bem create
├── .editorconfig                       | Конфигурация редактора
├── .eslintrc.yml                       | Конфигурация ES Lint
├── .gitignore                          | Исключенные файлы из git
├── .gitlab-ci.yml                      | Конфигурация для GitLab Pages
├── .stylelintrc                        | Концигурация StyleLint
├── gulpfile.js                         | Конфигурация Gulp
├── webpack.config.js                   | Конфигурация WebPack
└── package.json                        | Список зависимостей 

```

### <a name="command"></a> Команды запуска

#### Режим разработки 
```
npm run dev
```
    
#### Режим продакш. 
Минифицирует css/ js/ img, так создает json manifest для css и js. Результат сборки папка ```dist ```
    
```
npm run build
```

#### Публикация на [GitHub Pages](https://pages.github.com/)

```
npm run ghp
```

#### Публикация на [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/)
Для публикации на GitLab Pages необходимо сделать push в ветку pages. 

```
git push origin pages
```

#### Копирование build сборки в произвольную директорию 
Путь для директории редактируется в ```gulp/config.js ```
```
npm run deploy
```

#### Запускает проверку линтеров

```
npm run test
```

#### Автоматически исправляет ошибки линтера

```
npm run fix
```
### <a name="libs"></a> Библиотеки
Если в проекте используются сторонние библиотеки, необходимо подключить файл `vendor.js` на страницу

Для добавление новой библиотеки, необходимо установить пакет с помощью команды

```
npm install pack-name --save
```

После установки пакета, необходимо импортировать в нужном месте

```
import var from "pack-name"
```

Библиотека успешно добавлена в проект.

## Коллекция библиотек

+ [jQuery](https://jquery-docs.ru/) - Библиотека jQuery;
+ [Stimulus](https://stimulusjs.org/) - Фреймворк Stimulus;
+ [vh-check](https://github.com/Hiswe/vh-check) - Утилита для высоты экрана на мобильных устройствах;
+ [WOW](https://wowjs.uk/) - Анимация появления элементов при скролле;
+ [Slick](http://kenwheeler.github.io/slick/) - Слайдер;
+ [hc-sticky](http://kenwheeler.github.io/slick/) - Библиотека для создания "липких" элементов;

### <a name="help"></a> Заметки
#### <a name="bem"></a> Создание БЭМ блока   
В папке ``` blocks``` создается папка ```my-block ```. 
<br>Структура:
```
my-block
├── my-block.html
├── my-block.scss
└── my-block.js
```

```
bem create my-block
```    
    
#### <a name="svg"></a> Использование svg спрайта
Папка в которой хранятся svg иконки
```
img                             | Изображения
└── icons                       | Иконки   
    └── svg                     | SVG файлы для спрайта
```

Вызов спрайта
``` 
<svg class="svg">
 <use xlink:href="img/sprites/sprite.svg#icon"></use>
</svg> 
```  
   
#### <a name="include"></a> Подключение файлов
Подключение js модулей 
```
import var from "%modules%/block-name/file-name.js"
```

Подключения html файлов 
```
@@include('../../blocks/dir-name/file-name.html')
```
Подключение html файлов с передачей данных
```
@@include('../../blocks/dir-name/file-name.html', {
  "key": "value"
})
```
```
@@loop('../../blocks/dir-name/file-name.html', [
    { "key": "value" },
    { "key": "value" },
])
```

Шаблон подключаемого файла с данными
```
<section>
    <h1>@@key</h1>
</section>
```

### <a name="error"></a> Ошибки

+ При создании БЭМ блока ответ консоли: `-bash: $: command not found`

Если данная ошибка появляется каждый раз, при новой сессии терминала, данную строку необходимо добавить в конфигурационный файл оболочки вашего терминала

```
export PATH=./node_modules/.bin:$PATH
```

