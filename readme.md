# Сборка Gulp 

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


### <a name="file"></a> Структура проекта
```
gulp_prikhodkin                         | Корень проекта
├── dist                                | Build проекта
├── gulp                                | Таски для галпа
├── src                                 | Исходные файлы
│   ├── blocks                          | БЭМ блоки
│   │   └── block                       | БЭМ Блок
│   │       ├── block.html              | Разметка блока
│   │       ├── block.js                | Скрипт блока
│   │       └── block.scss              | Стили блока
│   ├── fonts                           | Шрифты
│   ├── img                             | Изображения
│   │   └── favicons                    | Фавиконки
│   ├── js                              | JS файлы
│   ├── scss                            | Файлы стилей
│   │   ├── helpers                     | Помощники
│   │   │   ├── _global.scss            | Глобальные стили сайта
│   │   │   ├── _mixins.scss            | Примеси
│   │   │   ├── _libs.scss              | Стили от библиотек
│   │   │   └── _variables.scss         | Переменные
│   │   └── main.scss                   | Основной файл стилей, экспортирует все остальные стиливые файлы
│   └── view                            | Представления
├── gulpfile.babel.js                   | Конфигурация Gulp
├── libs.js                             | Коллекция JS библиотек
├── package.json                        | Список зависимостей 
├── .babelrc.js                         | Конфикурация babel
├── .bemrc.js                           | Конфигурация bem create
├── .eslintrc.json                      | Конфигурация ES-Lint
├── .eslintrcignore                     | Исключенные файлы из проверки ES-Lint
├── .eslintrc.yml                       | Конфигурация ES-Lint
├── .stylelintrc                        | Концигурация StyleLint
├── .stylelintignore                    | Исключенные файлы из проверки StyleLint
├── .gitignore                          | Исключенные файлы из git
└── .editorconfig                       | Конфигурация редактора
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
npm run deploy
```

### <a name="libs"></a> Библиотеки

В корне проекта файл libs.js содержит все подключенные библиотеки и хранит в себе накопленную коллекцию библиотек. Неиспользуемые в проекте библиотеки закомментированны. 

Для добавление новой библиотеки, необходимо установить пакет с помощью команды

```
npm install pack-name --save
```

После установки пакета, необходимо прописать путь до библиотеки в файле libs.js

```
./node_modules/jquery/dist/jquery.min.js
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
``` 
<svg class="svg">
 <use xlink:href="img/sprites/sprite.svg#icon"></use>
</svg> 
```  
   
#### <a name="include"></a> Подключение файлов
Используется для подключения html/js файлов в нужном месте
```
//= "../blocks/dir-name/file-name.html"
```
       

### <a name="error"></a> Ошибки

+ При создании БЭМ блока ответ консоли: `-bash: $: command not found`

```
export PATH=./node_modules/.bin:$PATH
```

