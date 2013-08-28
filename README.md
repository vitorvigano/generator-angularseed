# generator-angularseed [![Build Status](https://secure.travis-ci.org/vitorvigano/generator-angularseed.png?branch=master)](https://travis-ci.org/vitorvigano/generator-angularseed)

A generator for [Yeoman](http://yeoman.io).


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-angularseed from npm, run:

```
$ npm install -g generator-angularseed
```

Finally, initiate the generator:

```
$ yo angularseed
```

### How This Generator Works

This generator can make a couple of things. Here we go:

To just build your app, run:

```
$ grunt build
```
A ready-to-deploy version will be created in build folder.


To run your tests using [Karma](http://karma-runner.github.io/0.10/index.html):

```
$ grunt test
```

To run the two tasks as described above, you can use:

```
$ grunt 
```

Finally, if you want all the tasks as described above plus deploy automatically to [AWS S3](http://aws.amazon.com/en/s3/)

```
$ grunt deploy
```

Note: AWS configurations should be set in the aws-config.json. If you want more informations about the config file, please visit [here](https://github.com/jpillora/grunt-aws) or contact me. I'll be happy to help you. :)

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
