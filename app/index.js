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
    message: 'What do you want to call your AngularJS project?',
      default: 'Awesome Title'
  }, {
    name: 'moduleName',
    message: 'What do you want to call your AngularJS main module?',
    default: 'myApp'
  }];

  this.prompt(prompts, function (props) {
      // title
    this.title = props.title;
      // module name
      this.moduleName = props.moduleName;

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
    // html files
  this.template('_index.html', 'app/index.html');
  this.template('_view1.html', 'app/views/view1.html');
    // css files
  this.template('app.css', 'app/css/app.css');
    // js files
  this.template('_app.js', 'app/js/app.js');  
  this.template('_services.js', 'app/js/services.js');
  this.template('_controllers.js', 'app/js/controllers.js');
  this.template('_filters.js', 'app/js/filters.js');
  this.template('_directives.js', 'app/js/directives.js');
};

AngularjsGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

AngularjsGenerator.prototype.runtime = function app() {
 
  this.copy('gitignore', '.gitignore');
};
