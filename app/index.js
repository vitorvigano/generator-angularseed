var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var AngularjsGenerator = module.exports = function AngularjsGenerator(args, options, config) {
    'use strict';
    
    yeoman.generators.Base.apply(this, arguments);
    
    this.on('end', function () {
        this.installDependencies({ skipInstall: options['skip-install'] });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AngularjsGenerator, yeoman.generators.Base);

AngularjsGenerator.prototype.askFor = function askFor() {
    'use strict';
    
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
    'use strict';
    
    //app
    this.mkdir('app');
    this.mkdir('app/img');
    this.mkdir('app/css');
    this.mkdir('app/js');
    this.mkdir('app/lib');
    this.mkdir('app/partials');
    //test
    this.mkdir('test');
    this.mkdir('test/lib/angular');
    this.mkdir('test/e2e');
    this.mkdir('test/unit');
    // karma conf
    this.mkdir('conf');
};

AngularjsGenerator.prototype.addFiles = function addFiles() {
    'use strict';
    
    //root
    this.copy('Gruntfile.js', 'Gruntfile.js');
    this.template('_package.json', 'package.json');
    this.copy('aws-config.json', 'aws-config.json');
    this.copy('gitignore', '.gitignore');
    //app
    this.template('_index.html', 'app/index.html');
    this.template('_app.js', 'app/js/app.js');
    this.template('_services.js', 'app/js/services.js');
    this.template('_controllers.js', 'app/js/controllers.js');
    this.template('_filters.js', 'app/js/filters.js');
    this.template('_directives.js', 'app/js/directives.js');
    this.copy('view1.html', 'app/partials/view1.html');
    this.copy('app.css', 'app/css/app.css');
    this.copy('robots.txt', 'app/robots.txt');
    this.copy('gitkeep', 'app/img/.gitkeep');
    this.copy('gitkeep', 'app/lib/.gitkeep');
    //test
    this.copy('angular.js', 'test/lib/angular/angular.js');
    this.copy('angular-mocks.js', 'test/lib/angular/angular-mocks.js');
    this.copy('angular-scenario.js', 'test/lib/angular/angular-scenario.js');
    this.copy('version.json', 'test/lib/angular/version.json');
    this.copy('version.txt', 'test/lib/angular/version.txt');
    this.copy('gitkeep', 'test/unit/.gitkeep');
    this.copy('gitkeep', 'test/e2e/.gitkeep');
    // karma conf
    this.copy('karma.conf.js', 'conf/karma.conf.js');
    this.copy('karma-e2e.conf.js', 'conf/karma-e2e.conf.js');
};