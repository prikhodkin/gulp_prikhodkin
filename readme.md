# Сборка Gulp 

## Содержание
 + [Быстрый старт](#setup)
 + [Структура проекта](#file)
 + [Команды запуска](#command)
 + [Шпаргалки](#help)
 + [Ошибки](#error)

### <a name="setup"></a> Быстрый старт

+ Установить [Node.JS](https://nodejs.org/en/)
+ [Склонировать репозиторий](https://github.com/prikhodkin/gulp_prikhodkin) ```git@github.com:prikhodkin/gulp_prikhodkin.git```
+ Перейти в папку со сборкой
+ Установить npm зависимости ```npm i ```
+ Запустить проект ```npm run dev```


### <a name="file"></a> Структура проекта
```
gulp_prikhodkin
├── dist
├── gulp
├── src
│   ├── blocks
│   ├── css
│   ├── fonts
│   ├── img
│   ├── js
│   ├── scss
│   └── view
├── gulpfile.babel.js
├── package.json
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
├── .gitignore
└── .editorconfig
```

### <a name="command"></a> Команды запуска

+ Режим разработки 
```
    npm run dev
```
    
+ Режим продакш. Минифицирует css/ js/ img, так создает json manifest для css и js. Результат сборки папка ```dist ```
    
```
    npm run build
```
    

+ Публикация на [GitHub Pages](https://pages.github.com/)

```
    npm run deploy
```

    
+ Создание БЭМ Блока
В папке ``` blocks``` создается папка ```my-block ```. 
<br>Содержание `my-block `:
    + `my-block.js`
    + `my-block.scss`
    + `my-block.html`

```
    bem create my-block
```    
    
### <a name="help"></a> Шпаргалки

+ Использование svg спрайта
``` 
<svg class="svg">
 <use xlink:href="img/sprites/sprite.svg#icon"></use>
</svg> 
```  
   
       

### <a name="error"></a> Ошибки

+ При создании БЭМ блока ответ консоли: `-bash: $: command not found`

```
    export PATH=./node_modules/.bin:$PATH
```

