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
        name: 'projectName',
        message: 'What do you want to call your AngularJS project?',
        default: 'My Angular Project'
    }, {
        name: 'includeAngularCookies',
        message: 'Do you want to include angular-cookies.js? (y/n)',
        default: false
    }, {
        name: 'includeBootstrap',
        message: 'Do you want to include Twitter Bootstrap? (y/n)',
        default: false
    }];

    this.prompt(prompts, function (props) {
        // project name
        this.projectName = props.projectName;
        // include angular cookies
        this.includeAngularCookies = props.includeAngularCookies;
        // include twitter bootstrap
        this.includeBootstrap = props.includeBootstrap;

        cb();
    }.bind(this));
};

AngularjsGenerator.prototype.app = function app() {
    this.mkdir('app');
    this.mkdir('app/img');
    this.mkdir('app/css');
    this.mkdir('app/js');
    this.mkdir('app/lib');
    
    if (this.includeAngularCookies) {
        this.mkdir('app/lib/angular');
    }
    
    if (this.includeBootstrap) {
        this.mkdir('app/lib/bootstrap');
    }
    
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
