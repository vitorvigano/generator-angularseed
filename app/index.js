'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var AngularjsGenerator = module.exports = function AngularjsGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AngularjsGenerator, yeoman.generators.Base);

AngularjsGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{    
    name: 'title',
    message: 'What do you want to call your AngularJS project?'
  }];

  this.prompt(prompts, function (props) {
      //title
    this.title = props.title;

    cb();
  }.bind(this));
};

AngularjsGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/img');
  this.mkdir('app/css');
  this.mkdir('app/js');
  this.mkdir('app/lib');
  this.mkdir('app/lib/angular');
  this.mkdir('app/views');
    
    // grunt
    this.template('Gruntfile.js', 'Gruntfile.js');
  this.template('_package.json', 'package.json');
    // bower
  this.template('_bower.json', 'bower.json');
    // index.html
  this.template('_index.html', 'app/index.html');
    // css files
  this.template('app.css', 'app/css/app.css');
    // js files
  this.template('app.js', 'app/js/app.js');  
  this.template('services.js', 'app/js/services.js');
  this.template('controllers.js', 'app/js/controllers.js');
  this.template('filters.js', 'app/js/filters.js');
  this.template('directives.js', 'app/js/directives.js');
};

AngularjsGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

AngularjsGenerator.prototype.runtime = function app() {
 
  this.copy('gitignore', '.gitignore');
};
