# Generator-angularseed
[![Build Status](https://secure.travis-ci.org/vitorvigano/generator-angularseed.png?branch=master)](https://travis-ci.org/vitorvigano/generator-angularseed)

A generator for yo based on Angular Seed.

Maintainer: [Vitor Viganó](https://github.com/vitorvigano)

## Getting started

- Make sure you have [yo](https://github.com/yeoman/yo) installed: `npm install -g yo`

- Install the generator: `npm install -g generator-angularseed`

- Make a new directory, and `cd` into it:

- Run yo: `yo angularseed`

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)

##generator-angularseed

Este gerador foi construído com base no [Angular seed](https://github.com/angular/angular-seed) com o objetivo de automatizar o build do projeto.

## Tasks disponíveis

### grunt test

`grunt test`

Irá rodar os testes utilizando o [Karma](http://karma-runner.github.io/).

O Karma necessita que o navegador seja configurado no PATH do ambiente. Ou se preferir, use o PhantomJS.

Maiores informações em [Browser configuration](http://karma-runner.github.io/0.8/config/browsers.html)

### grunt build

`grunt build`

Irá gerar uma versão pronta para deploy `/build`.

### grunt (default)

`grunt`

Irá rodar todas as tasks acima.