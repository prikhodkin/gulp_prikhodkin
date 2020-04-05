# Сборка Gulp 

## Содержание
 + [Быстрый старт](#setup)
 + [Структура проекта](#file)
 + [Команды запуска](#command)
 + [Заметки](#help)
    + [Создание БЭМ блока](#bem)
    + [Использование svg спрайта](#svg)
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
   
       

### <a name="error"></a> Ошибки

+ При создании БЭМ блока ответ консоли: `-bash: $: command not found`

```
export PATH=./node_modules/.bin:$PATH
```

