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
        
        name: 'continue',
        message: 'This will create a new AngularJS application. Continue? (y/n)',
        default: false
    }];    

    this.prompt(prompts, function (props) { 
        
        this.moduleName = 'app';
        this.continue = props.continue; 
        
        cb();
        
    }.bind(this));
};

AngularjsGenerator.prototype.createDirectories = function createDirectories() {
    
    this.mkdir('app');   
    this.mkdir('app/img');
    this.mkdir('app/css');
    this.mkdir('app/js');
    this.mkdir('app/lib');
    this.mkdir('app/partials');   
};

AngularjsGenerator.prototype.addFiles = function addFiles() {
    
    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('_package.json', 'package.json');
    this.template('_bower.json', 'bower.json');
    this.template('_index.html', 'app/index.html');    
    this.template('_app.js', 'app/js/app.js');
    this.template('_services.js', 'app/js/services.js');
    this.template('_controllers.js', 'app/js/controllers.js');
    this.template('_filters.js', 'app/js/filters.js');
    this.template('_directives.js', 'app/js/directives.js');
    this.copy('view1.html', 'app/partials/view1.html');
    this.copy('app.css', 'app/css/app.css');
    this.copy('robots.txt', 'app/robots.txt');
    this.copy('gitignore', '.gitignore');
    this.copy('gitkeep', 'app/img/.gitkeep');
    this.copy('gitkeep', 'app/lib/.gitkeep');
};